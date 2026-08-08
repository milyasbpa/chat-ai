import * as React from 'react';
import Image from 'next/image';
import { Avatar } from '@/core/components/avatar/avatar';
import { Button } from '@/core/components/button/button';
import { cn } from '@/core/utils/cn';

export interface ChatMessageProps {
  id: string;
  role: 'user' | 'ai';
  content?: string;
  images?: string[];
  isLoading?: boolean;
}

export function ChatMessage({
  role,
  content,
  images,
  isLoading,
}: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'flex max-w-[85%] flex-col gap-3 rounded-lg p-3 lg:max-w-[75%]',
          isUser
            ? 'rounded-tr-sm bg-neutral-100 text-neutral-900'
            : 'rounded-tl-sm border border-neutral-200 bg-white'
        )}
      >
        {/* User Role */}
        {isUser && (
          <div className="text-[14px] leading-[20px] whitespace-pre-wrap">
            {content}
          </div>
        )}

        {/* AI Role */}
        {!isUser && (
          <>
            <div className="flex flex-row items-start gap-3">
              <Avatar
                fallback="AI"
                alt="AI"
                className="mt-0.5 bg-indigo-100 text-indigo-700 shadow-sm"
              />
              {isLoading ? (
                <div className="flex h-5 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-pulse"
                  >
                    <circle
                      cx="4"
                      cy="12"
                      r="2"
                      fill="currentColor"
                      className="text-neutral-400"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      fill="currentColor"
                      className="text-neutral-400 opacity-75"
                    />
                    <circle
                      cx="20"
                      cy="12"
                      r="2"
                      fill="currentColor"
                      className="text-neutral-400 opacity-50"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex-1 text-[14px] leading-[20px] whitespace-pre-wrap text-neutral-900">
                  {content}
                </div>
              )}
            </div>

            {/* Images row for AI */}
            {images && images.length > 0 && (
              <div className="flex flex-row flex-wrap items-center gap-4 pl-[44px]">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative h-[80px] w-[120px] overflow-hidden rounded border border-neutral-200"
                  >
                    <Image
                      src={src}
                      alt={`Attached ${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons for AI */}
            {!isLoading && (
              <div className="flex flex-row gap-2 pl-[44px]">
                <Button
                  variant="outline"
                  className="h-8 border-none bg-transparent px-2 text-neutral-500 shadow-none hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() =>
                    content && navigator.clipboard.writeText(content)
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4V2H14V12H12V14H2V4H4ZM4 12H10V4H4V12ZM6 6H12V10H14V2H6V6Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="h-8 border-none bg-transparent px-2 text-neutral-500 shadow-none hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6666 4.88661C11.5303 3.73812 9.91924 3 8.13401 3C4.85108 3 2.15579 5.51862 2.01258 8.75H0.675781C0.822299 4.77708 4.14811 1.66667 8.13401 1.66667C10.2889 1.66667 12.2131 2.60742 13.5132 4.09278L14.6666 2.93934V7.60601H9.99992L12.6666 4.88661ZM3.33325 13.0607V8.39401H7.99992L5.33325 11.1134C6.46955 12.2619 8.0806 13 9.86583 13C13.1488 13 15.8441 10.4814 15.9873 7.25H17.3241C17.1775 11.2229 13.8517 14.3333 9.86583 14.3333C7.71092 14.3333 5.78676 13.3926 4.48663 11.9072L3.33325 13.0607Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
