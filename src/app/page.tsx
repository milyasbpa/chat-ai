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
    id: '5-1',
    role: 'ai' as const,
    content:
      "The main concern in design is balancing aesthetics with functionality. A product must look good, but more importantly, it must solve the user's problem efficiently. Additionally, accessibility and inclusivity are paramount to ensure that the design works for as many people as possible regardless of their abilities or circumstances.",
  },
  {
    id: '5-2',
    role: 'user' as const,
    content: 'Can you give me an example of an accessible design pattern?',
  },
  {
    id: '5-3',
    role: 'ai' as const,
    content:
      'Certainly! A common accessible design pattern is the use of high color contrast between text and its background. For example, using dark gray text on a white background ensures readability for users with visual impairments. Another example is providing descriptive alt text for images, which allows screen readers to convey the content of the image to visually impaired users.',
  },
  {
    id: '5-4',
    role: 'user' as const,
    content: 'That makes sense. What about forms?',
  },
  {
    id: '6',
    role: 'user' as const,
    content: 'Can you show me an example of an error state?',
  },
  {
    id: '7',
    role: 'ai' as const,
    isError: true,
  },
];

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showJumpToBottom, setShowJumpToBottom] = React.useState(false);
  const isLoadingHistory = true; // Temporary for screenshot

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
                  Loading...
                </span>
                <span className="text-[16px] leading-[24px] text-neutral-900">
                  Fetching data, it may take a while
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
            <ChatHistory messages={mockMessages} />
          </div>
        )}

        {!isLoadingHistory && showJumpToBottom && (
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
