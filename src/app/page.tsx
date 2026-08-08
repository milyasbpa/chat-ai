'use client';

import { EmptyState } from '@/features/chat-session/sections/empty-state';
import { ChatInput } from '@/features/chat-session/components/chat-input';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-stretch bg-white px-4 lg:px-[64px]">
      <div className="mx-auto flex h-full w-full max-w-[800px] flex-col gap-6 pt-8 pb-6 lg:gap-10 lg:pt-[80px] lg:pb-[24px]">
        <div className="flex-1 overflow-y-auto">
          <EmptyState />
        </div>
        <div className="w-full shrink-0">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
