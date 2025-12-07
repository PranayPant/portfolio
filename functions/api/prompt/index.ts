import { createWorkersAI } from 'workers-ai-provider';
import { streamText } from 'ai';
import { Ai } from '@cloudflare/workers-types/latest';

import textContent from '../../assets/resume_frontend.txt';

interface Env {
  AI: Ai;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  const workersai = createWorkersAI({ binding: env.AI });
  const body = await request.json();
  const prompt = body.prompt;

  if (!prompt) {
    throw new Error('Empty prompt');
  }

  const result = streamText({
    model: workersai('@cf/meta/llama-2-7b-chat-int8'),
    system: `
            You answer questions from a first-person perspective as if you were 
            the author of the text in a conversational manner, based ONLY 
            on the content of the provided text document.

            If the answer is not contained within the document, 
            respond with "I don't know how to answer that. Please ask me something else."
      `,
    messages: [
      {
        role: 'user',
        content: `
        ========== Document Start ==========
        ${textContent}
        ========== Document End ==========
        `,
      },
      { role: 'user', content: prompt },
    ],
    maxOutputTokens: 1000,
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
}
