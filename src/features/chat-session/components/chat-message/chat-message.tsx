import * as React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { cn } from '@/core/utils/cn';

export interface ChatMessageProps {
  id: string;
  role: 'user' | 'ai';
  content?: string;
  images?: string[];
  isLoading?: boolean;
  isError?: boolean;
}

const markdownComponents = {
  code({
    inline,
    className,
    children,
    ...props
  }: React.ComponentPropsWithoutRef<'code'> & { inline?: boolean }) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';

    if (!inline && match) {
      return (
        <div className="my-3 flex flex-col gap-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex items-center justify-between rounded-[4px] bg-neutral-200 px-4 py-2">
            <span className="text-[14px] font-semibold text-neutral-500 capitalize">
              {language}
            </span>
            <button
              type="button"
              className="flex items-center gap-1 text-[14px] font-medium text-neutral-500 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-indigo-700/50 focus-visible:outline-none"
              onClick={() =>
                navigator.clipboard.writeText(
                  String(children).replace(/\n$/, '')
                )
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.52764 5.83295V3.74962C6.52764 3.36609 6.83856 3.05518 7.22208 3.05518H15.5554C15.939 3.05518 16.2499 3.36609 16.2499 3.74962V13.4718C16.2499 13.8554 15.939 14.1663 15.5554 14.1663H13.4721V16.249C13.4721 16.6329 13.1597 16.9441 12.7729 16.9441H4.44907C4.06291 16.9441 3.75 16.6353 3.75 16.249L3.75181 6.528C3.75187 6.14414 4.06433 5.83295 4.45099 5.83295H6.52764ZM5.14057 7.22184L5.13902 15.5552H12.0832V7.22184H5.14057ZM7.91653 5.83295H13.4721V12.7774H14.861V4.44406H7.91653V5.83295Z"
                  fill="currentColor"
                />
              </svg>
              Copy code
            </button>
          </div>
          <div className="overflow-x-auto text-[14px] leading-[20px]">
            <SyntaxHighlighter
              {...props}
              style={oneLight}
              language={language}
              PreTag="div"
              customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    }
    return (
      <code
        {...props}
        className={cn(
          'rounded bg-neutral-100 px-1 py-0.5 font-mono text-[14px]',
          className
        )}
      >
        {children}
      </code>
    );
  },
  p({ children }: React.ComponentPropsWithoutRef<'p'>) {
    return <p className="mb-4 whitespace-pre-wrap last:mb-0">{children}</p>;
  },
};

export function ChatMessage({
  role,
  content,
  images,
  isLoading,
  isError,
}: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        'flex w-full',
        isUser ? 'justify-end' : 'justify-start lg:justify-center'
      )}
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
                        An error occured. Please try again.
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.52764 5.83295V3.74962C6.52764 3.36609 6.83856 3.05518 7.22208 3.05518H15.5554C15.939 3.05518 16.2499 3.36609 16.2499 3.74962V13.4718C16.2499 13.8554 15.939 14.1663 15.5554 14.1663H13.4721V16.249C13.4721 16.6329 13.1597 16.9441 12.7729 16.9441H4.44907C4.06291 16.9441 3.75 16.6353 3.75 16.249L3.75181 6.528C3.75187 6.14414 4.06433 5.83295 4.45099 5.83295H6.52764ZM5.14057 7.22184L5.13902 15.5552H12.0832V7.22184H5.14057ZM7.91653 5.83295H13.4721V12.7774H14.861V4.44406H7.91653V5.83295Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex h-8 items-center justify-center gap-1 rounded px-2 text-indigo-700 hover:bg-indigo-50 focus-visible:ring-4 focus-visible:ring-indigo-700/12 focus-visible:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_7679_1076)">
                      <path
                        d="M13.4727 2.50537L14.3885 4.22261L16.1057 5.13848L14.3885 6.05434L13.4727 7.77157L12.5568 6.05434L10.8395 5.13848L12.5568 4.22261L13.4727 2.50537ZM9.07447 8.14773L12.5467 9.9996L9.07447 11.8514L7.22263 15.3236L5.37078 11.8514L1.89856 9.9996L5.37078 8.14773L7.22263 4.67551L9.07447 8.14773ZM9.59531 9.9996L8.04791 9.17432L7.22263 7.6269L6.39735 9.17432L4.84995 9.9996L6.39735 10.8249L7.22263 12.3722L8.04791 10.8249L9.59531 9.9996ZM15.3245 13.0088L14.1671 10.8387L13.0097 13.0088L10.8395 14.1663L13.0097 15.3236L14.1671 17.4938L15.3245 15.3236L17.4946 14.1663L15.3245 13.0088Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7679_1076">
                        <rect
                          width="16.6667"
                          height="16.6667"
                          fill="white"
                          transform="translate(1.66663 1.6665)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[14px] leading-[20px] font-medium">
                    Regenerate
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
