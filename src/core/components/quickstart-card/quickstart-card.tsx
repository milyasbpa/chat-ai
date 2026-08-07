import * as React from 'react';
import { cn } from '@/core/utils/cn';

export interface QuickstartCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const QuickstartCard = React.forwardRef<
  HTMLButtonElement,
  QuickstartCardProps
>(({ title, description, icon, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'flex w-[166px] flex-col items-start gap-6 rounded-lg border border-neutral-200 bg-white p-4 text-left',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
          {icon}
        </div>
      )}
      <div className="flex w-[134px] flex-col items-start gap-2">
        <h3 className="text-[14px] leading-[20px] font-semibold text-neutral-900">
          {title}
        </h3>
        <p className="text-[12px] leading-[16px] font-normal text-neutral-600">
          {description}
        </p>
      </div>
    </button>
  );
});
QuickstartCard.displayName = 'QuickstartCard';
