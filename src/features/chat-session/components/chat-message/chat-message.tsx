import * as React from 'react';
import Image from 'next/image';
import { Copy, RefreshCw } from 'lucide-react';
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
          'flex max-w-[85%] flex-col gap-3 rounded-xl p-3 lg:max-w-[75%]',
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
              <div className="flex shrink-0 items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2329 23.0594L8 24L8.94065 19.767C8.34035 18.6445 8 17.362 8 16C8 11.5817 11.5817 8 16 8C20.4182 8 24 11.5817 24 16C24 20.4182 20.4182 24 16 24C14.638 24 13.3555 23.6597 12.2329 23.0594ZM12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16H18.4C18.4 17.3255 17.3255 18.4 16 18.4C14.6745 18.4 13.6 17.3255 13.6 16H12Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              {isLoading ? (
                <div className="flex h-8 items-center text-indigo-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-pulse"
                  >
                    <circle cx="4" cy="12" r="3" fill="currentColor" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="currentColor"
                      className="opacity-75"
                    />
                    <circle
                      cx="20"
                      cy="12"
                      r="3"
                      fill="currentColor"
                      className="opacity-50"
                    />
                  </svg>
                </div>
              ) : (
                <div className="mt-1 flex-1 text-[14px] leading-[20px] whitespace-pre-wrap text-neutral-900">
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
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons for AI */}
            {!isLoading && (
              <div className="flex flex-row items-center gap-4 pt-1 pl-[44px]">
                <Button
                  variant="outline"
                  className="h-8 w-8 border-none bg-transparent p-0 text-neutral-500 shadow-none hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() =>
                    content && navigator.clipboard.writeText(content)
                  }
                >
                  <Copy className="h-[20px] w-[20px]" />
                </Button>
                <Button
                  variant="outline"
                  className="h-8 gap-1 border-none bg-transparent px-2 text-indigo-700 shadow-none hover:bg-indigo-50"
                >
                  <RefreshCw className="h-[20px] w-[20px]" />
                  <span className="text-[14px] leading-[20px] font-medium">
                    Regenerate
                  </span>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
