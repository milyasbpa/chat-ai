import * as React from 'react';
import { cn } from '@/core/utils/cn';
import { Logo } from '@/core/components/logo/logo';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, onMenuClick, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'flex w-full items-center justify-between border-b border-neutral-200 bg-white px-3 py-4 md:px-8 lg:hidden',
          className
        )}
        {...props}
      >
        <Logo />
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus-visible:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-indigo-700/12 focus-visible:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>
    );
  }
);
Navbar.displayName = 'Navbar';
