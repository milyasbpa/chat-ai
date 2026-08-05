import * as React from 'react';
import { cn } from '@/core/utils/cn';

export interface SidebarChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  selected?: boolean;
}

export const SidebarChip = React.forwardRef<
  HTMLButtonElement,
  SidebarChipProps
>(({ icon, selected, className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'flex w-full items-center gap-3 rounded p-1.5 text-left text-[14px] leading-[20px] font-medium transition-colors',
        selected
          ? 'bg-neutral-50 text-indigo-700'
          : 'text-neutral-600 hover:bg-neutral-50',
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center">
          {icon}
        </span>
      )}
      <span className="truncate">{children}</span>
    </button>
  );
});

SidebarChip.displayName = 'SidebarChip';
