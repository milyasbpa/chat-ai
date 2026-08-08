'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { ChatHistory } from '@/features/chat-session/components/chat-history/chat-history';
import { ChatInput } from '@/features/chat-session/components/chat-input';
import { Button } from '@/core/components/button/button';

const mockMessages = [
  {
    id: '1',
    role: 'user' as const,
    content: 'What is the great designer UI UX in your mind?',
  },
  {
    id: '2',
    role: 'ai' as const,
    content:
      'As a Great UI UX Designer, there are several core competencies that are essential for success:\n\nUser-Centered Design: A Senior Product Designer should be able to understand and empathize with users to design products that meet their needs and solve their problems.',
  },
  {
    id: '3',
    role: 'user' as const,
    content: 'Give me examples of great UX designer deliverables',
  },
  {
    id: '4',
    role: 'ai' as const,
    content:
      'Here are 3 examples images that can represent great UI UX Designer',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=240&h=160&fit=crop',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=240&h=160&fit=crop',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=240&h=160&fit=crop',
    ],
  },
  {
    id: '5',
    role: 'user' as const,
    content: 'What is main concern in design?',
  },
  {
    id: '6',
    role: 'ai' as const,
    isLoading: true,
  },
];

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showJumpToBottom, setShowJumpToBottom] = React.useState(false);

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
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex h-full flex-col items-stretch bg-white px-4 lg:px-[64px]">
      <div className="relative mx-auto flex h-full w-full max-w-[800px] flex-col gap-6 pt-8 pb-6 lg:gap-10 lg:pt-[80px] lg:pb-[24px]">
        <div
          id="chat-scroll-container"
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto pr-2"
        >
          <ChatHistory messages={mockMessages} />
        </div>

        {showJumpToBottom && (
          <div className="absolute bottom-[90px] left-1/2 z-10 -translate-x-1/2 lg:bottom-[100px]">
            <Button
              variant="outline"
              className="flex h-[36px] items-center justify-center gap-1 rounded border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-sm hover:bg-neutral-50"
              onClick={scrollToBottom}
            >
              <ArrowDown className="h-[20px] w-[20px]" />
              <span className="text-[14px] leading-[20px] font-medium">
                Jump to bottom
              </span>
            </Button>
          </div>
        )}

        <div className="w-full shrink-0">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
