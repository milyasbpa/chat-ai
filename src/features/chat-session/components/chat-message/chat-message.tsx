import * as React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/core/utils/cn';
import { getMarkdownComponents } from './markdown-components';
import { CopyIcon } from '@/core/icons/copy-icon';
import { AiBubbleIcon } from '@/core/icons/ai-bubble-icon';
import { RegenerateIcon } from '@/core/icons/regenerate-icon';

export interface ChatMessageProps {
  id: string;
  role: 'user' | 'ai';
  content?: string;
  images?: string[];
  isLoading?: boolean;
  isError?: boolean;
  copyCodeText?: string;
  regenerateText?: string;
  errorText?: string;
}

export function ChatMessage({
  role,
  content,
  images,
  isLoading,
  isError,
  copyCodeText = 'Copy code',
  regenerateText = 'Regenerate',
  errorText = 'An error occured. Please try again.',
}: ChatMessageProps) {
  const isUser = role === 'user';
  const markdownComponents = React.useMemo(
    () => getMarkdownComponents(copyCodeText),
    [copyCodeText]
  );

  return (
    <div
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'flex flex-col gap-3',
          isUser
            ? 'w-full max-w-full lg:max-w-[70%]'
            : 'w-full max-w-[528px] rounded-lg border border-neutral-200 bg-white p-3'
        )}
      >
        {isUser && content && (
          <div className="rounded-lg bg-neutral-50 p-3">
            <div className="text-[14px] leading-[20px] font-normal break-words text-neutral-900">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* AI Role */}
        {!isUser && (
          <>
            <div className="flex flex-row items-start gap-3">
              <div className="flex shrink-0 items-center justify-center rounded-full bg-indigo-50">
                <AiBubbleIcon />
              </div>
              <div className="flex w-full min-w-0 flex-col gap-2 pt-1.5">
                {isLoading ? (
                  <div className="flex h-5 items-center">
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-700 [animation-delay:-0.3s]" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-700 [animation-delay:-0.15s]" />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-700" />
                    </div>
                  </div>
                ) : isError ? (
                  <div className="flex">
                    <div className="flex items-center gap-3 rounded-full bg-red-50 px-2 py-1">
                      <span className="text-[14px] leading-[20px] font-medium text-red-600">
                        {errorText}
                      </span>
                    </div>
                  </div>
                ) : (
                  content && (
                    <div className="mt-1 flex-1 text-[14px] leading-[20px] break-words text-neutral-900">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {content}
                      </ReactMarkdown>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Images row for AI */}
            {images && images.length > 0 && (
              <div className="flex flex-row flex-wrap items-center gap-4 pl-[44px]">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative h-[100px] w-[142px] overflow-hidden rounded border border-neutral-200"
                  >
                    <Image
                      src={src}
                      alt={`Attached ${idx}`}
                      fill
                      className="object-cover"
                      sizes="142px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons for AI */}
            {!isLoading && !isError && (
              <div className="flex w-full flex-row justify-end gap-4 py-2">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded p-0 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-4 focus-visible:ring-indigo-700/12 focus-visible:outline-none"
                  onClick={() =>
                    content && navigator.clipboard.writeText(content)
                  }
                >
                  <CopyIcon />
                </button>
                <button
                  type="button"
                  className="flex h-8 items-center justify-center gap-1 rounded px-2 text-indigo-700 hover:bg-indigo-50 focus-visible:ring-4 focus-visible:ring-indigo-700/12 focus-visible:outline-none"
                >
                  <RegenerateIcon />
                  <span className="text-[14px] leading-[20px] font-medium">
                    {regenerateText}
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
