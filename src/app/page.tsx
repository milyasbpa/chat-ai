'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { ChatHistory } from '@/features/chat-session/components/chat-history/chat-history';
import { ChatInput } from '@/features/chat-session/components/chat-input';
import { Button } from '@/core/components/button/button';

import { useTranslations } from 'next-intl';
import type { ChatMessageProps } from '@/features/chat-session/components/chat-message/chat-message';
import mockMessagesData from '@/features/chat-session/data/mock-messages.json';

const mockMessages: ChatMessageProps[] = mockMessagesData as ChatMessageProps[];

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showJumpToBottom, setShowJumpToBottom] = React.useState(false);
  const isLoadingHistory = false; // Temporary for screenshot

  const tHistory = useTranslations('chat_history');
  const tInput = useTranslations('chat_input');
  const tMessage = useTranslations('chat_message');

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const distanceToBottom =
      target.scrollHeight - target.scrollTop - target.clientHeight;
    // Show button if we are scrolled up more than 100px from the bottom
    setShowJumpToBottom(distanceToBottom > 100);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to bottom on initial load
  React.useEffect(() => {
    if (scrollRef.current && !isLoadingHistory) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isLoadingHistory]);

  return (
    <div className="flex h-full flex-col items-stretch bg-white px-4 lg:px-[64px]">
      <div className="relative mx-auto flex h-full w-full max-w-[800px] flex-col gap-6 pt-8 pb-6 lg:gap-10 lg:pt-[80px] lg:pb-[24px]">
        {isLoadingHistory ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="flex w-full max-w-[320px] flex-col items-center gap-5 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin text-neutral-900"
                >
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-2">
                <span className="text-[20px] leading-[28px] font-medium text-neutral-900">
                  {tHistory('loading')}
                </span>
                <span className="text-[16px] leading-[24px] text-neutral-900">
                  {tHistory('loading_description')}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="chat-scroll-container"
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto pr-2"
          >
            <ChatHistory
              messages={mockMessages.map((msg) => ({
                ...msg,
                copyCodeText: tMessage('copy_code'),
                regenerateText: tMessage('regenerate'),
                errorText: tMessage('error_message'),
              }))}
            />
          </div>
        )}

        {!isLoadingHistory && showJumpToBottom && (
          <div className="absolute bottom-[90px] left-1/2 z-10 -translate-x-1/2 lg:bottom-[100px]">
            <Button
              variant="secondary"
              className="flex items-center gap-2 rounded-full px-3 py-1.5 shadow-sm"
              onClick={scrollToBottom}
            >
              <ArrowDown className="h-[20px] w-[20px]" />
              <span className="text-[14px] leading-[20px] font-medium">
                {tHistory('jump_to_bottom')}
              </span>
            </Button>
          </div>
        )}

        <div className="w-full shrink-0">
          <ChatInput placeholderText={tInput('placeholder')} />
        </div>
      </div>
    </div>
  );
}
