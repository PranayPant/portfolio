import { createWorkersAI } from 'workers-ai-provider';
import { streamText } from 'ai';
import { Ai } from '@cloudflare/workers-types/latest';

interface Env {
  AI: Ai;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;
  
  try {
    const workersai = createWorkersAI({ binding: env.AI });
    const body = await request.json();
    const prompt = body.prompt;

    if(!prompt) {
      throw new Error("Empty prompt");
    }
    
    const result = streamText({
      model: workersai('@cf/meta/llama-2-7b-chat-int8'),
      prompt,
      maxOutputTokens: 100,
    });

    return result.toTextStreamResponse({
      headers: {
        // add these headers to ensure that the
        // response is chunked and streamed
        'Content-Type': 'text/x-unknown',
        'content-encoding': 'identity',
        'transfer-encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json'
        }
      }
    );
  }
}