import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { cn } from '@/core/utils/cn';
import { CopyIcon } from '@/core/icons/copy-icon';

export const getMarkdownComponents = (copyCodeText: string) => ({
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
              <CopyIcon />
              {copyCodeText}
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
});
