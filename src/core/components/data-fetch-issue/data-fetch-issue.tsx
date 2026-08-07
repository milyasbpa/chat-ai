import * as React from 'react';
import { cn } from '@/core/utils/cn';

export interface DataFetchIssueProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export const DataFetchIssue = React.forwardRef<
  HTMLDivElement,
  DataFetchIssueProps
>(
  (
    {
      title = 'Unexpected error',
      description = (
        <>
          We&apos;re facing some issues at the moment. Please try again later or
          contact support at{' '}
          <a href="mailto:support@codepulse.com" className="text-indigo-700">
            support@codepulse.com
          </a>
        </>
      ),
      icon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-[320px] flex-col items-center gap-5 p-6 text-center',
          className
        )}
        {...props}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow">
          {icon || (
            <svg
              width="24"
              height="24"
              viewBox="15 14 24 24"
              fill="currentColor"
              className="text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27 16C32.5228 16 37 20.4771 37 26C37 26.7266 36.9225 27.4351 36.7753 28.1177L34.9931 26.3355C34.9977 26.2242 35 26.1124 35 26C35 21.5817 31.4183 18 27 18C22.5817 18 19 21.5817 19 26C19 30.4183 22.5817 34 27 34C28.3023 34 29.5319 33.6888 30.6186 33.1368C30.7735 33.3828 30.958 33.6149 31.1716 33.8284C31.4739 34.1307 31.8125 34.3745 32.1734 34.5598C30.6642 35.4737 28.8936 36 27 36C21.4771 36 17 31.5228 17 26C17 20.4771 21.4771 16 27 16ZM34 28.1716L35.4142 29.5858C36.1953 30.3668 36.1953 31.6332 35.4142 32.4142C34.6332 33.1953 33.3668 33.1953 32.5858 32.4142C31.8402 31.6687 31.8064 30.481 32.4841 29.6952L32.5858 29.5858L34 28.1716ZM27 29C28.4664 29 29.7853 29.6312 30.6999 30.6368L29.7549 31.4961C28.965 31.1825 28.018 31 27 31C25.982 31 25.035 31.1825 24.2451 31.4961L23.3001 30.6368C24.2147 29.6312 25.5336 29 27 29ZM23.5 24C24.3284 24 25 24.6716 25 25.5C25 26.3284 24.3284 27 23.5 27C22.6716 27 22 26.3284 22 25.5C22 24.6716 22.6716 24 23.5 24ZM30.5 24C31.3284 24 32 24.6716 32 25.5C32 26.3284 31.3284 27 30.5 27C29.6716 27 29 26.3284 29 25.5C29 24.6716 29.6716 24 30.5 24Z" />
            </svg>
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[20px] leading-tight font-medium text-neutral-900">
            {title}
          </h3>
          <p className="text-[16px] leading-normal font-normal text-neutral-900">
            {description}
          </p>
        </div>
      </div>
    );
  }
);
DataFetchIssue.displayName = 'DataFetchIssue';
