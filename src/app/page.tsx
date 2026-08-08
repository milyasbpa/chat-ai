'use client';

import { EmptyState } from '@/features/chat-session/sections/empty-state';
import { ChatInput } from '@/features/chat-session/components/chat-input';
import { ApiKeyModal } from '@/features/auth/components/api-key-modal';
import * as React from 'react';

export default function Home() {
  const [isApiKeyOpen, setIsApiKeyOpen] = React.useState(false);

  return (
    <div className="flex h-full flex-col items-stretch bg-white px-4 lg:px-[64px]">
      <div className="mx-auto flex h-full w-full max-w-[800px] flex-col gap-6 pt-8 pb-6 lg:gap-10 lg:pt-[80px] lg:pb-[24px]">
        <div className="flex flex-1 items-center justify-center">
          <EmptyState />
          {/* Temporary button to test modal */}
          <button
            onClick={() => setIsApiKeyOpen(true)}
            className="absolute top-4 right-4 rounded bg-indigo-600 px-3 py-1 text-xs text-white"
          >
            Open API Key Modal
          </button>
          <ApiKeyModal open={isApiKeyOpen} onOpenChange={setIsApiKeyOpen} />
        </div>
        <div className="w-full shrink-0">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
