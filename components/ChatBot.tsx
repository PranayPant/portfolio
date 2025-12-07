import ChatBot, { type Flow } from 'react-chatbotify';

export const Chat = () => {
  const flow: Flow = {
    start: {
      message: 'Hello there! Enter a prompt.',
      path: 'loop',
    },
    loop: {
      message: async params => {
        try {
          const response = await fetch('/api/prompt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: params.userInput }),
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          if (!response.body) {
            throw new Error('Response body is empty');
          }

          // 3. Get a reader for the response body stream
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let accumulatedMessage = '';

          // 4. Loop asynchronously to read chunks
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              // The stream has ended
              break;
            }

            // Decode the raw chunk (Uint8Array) into text
            const chunk = decoder.decode(value, { stream: true });
            accumulatedMessage += chunk;

            // 5. Update the chatbot message with the accumulated text
            // This function replaces the last message sent by the bot with the new content
            await params.streamMessage(accumulatedMessage);
          }

          // 6. Signal the end of the stream once all chunks are processed
          await params.endStreamMessage('');
          return; // No return value needed, message is already streamed
        } catch (error) {
          console.error('Streaming fetch failed:', error);
          await params.streamMessage("Sorry, I couldn't connect to the streaming service.");
          await params.endStreamMessage('');
        }
      },
      path: 'start',
    },
  };
  return <ChatBot flow={flow} />;
};
