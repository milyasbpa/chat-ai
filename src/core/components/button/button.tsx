import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/core/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded px-[14px] py-[10px] text-[14px] font-medium leading-[20px] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-700/12 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-700 text-white shadow hover:bg-indigo-700/90 disabled:opacity-50',
        secondary:
          'bg-white text-neutral-900 border border-neutral-200 shadow-sm hover:bg-neutral-50 hover:text-neutral-950 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-transparent disabled:shadow-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
