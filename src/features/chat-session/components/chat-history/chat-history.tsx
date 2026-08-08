import * as React from 'react';
import { ChatMessage, ChatMessageProps } from '../chat-message/chat-message';

interface ChatHistoryProps {
  messages: ChatMessageProps[];
}

export function ChatHistory({ messages }: ChatHistoryProps) {
  return (
    <div className="flex flex-col gap-6">
      {messages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
    </div>
  );
}
