import * as React from 'react';
import { cn } from '@/core/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-[44px] w-full rounded border bg-neutral-50 px-[14px] py-[12px] text-[14px] leading-[20px] font-normal text-neutral-900 transition-colors placeholder:text-neutral-500 focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-400 disabled:placeholder:text-neutral-400',
          error
            ? 'border-red-300 focus-visible:border-red-600 focus-visible:ring-red-600/12'
            : 'border-neutral-200 focus-visible:border-indigo-600 focus-visible:ring-indigo-700/12',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
