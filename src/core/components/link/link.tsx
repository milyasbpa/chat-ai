import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/core/utils/cn';

const linkVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-700/12 aria-disabled:pointer-events-none aria-disabled:text-neutral-400',
  {
    variants: {
      variant: {
        primary:
          'text-indigo-700 hover:bg-neutral-50 focus-visible:bg-neutral-50',
        icon: 'text-neutral-500 hover:text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface CustomLinkProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {
  href: string;
  disabled?: boolean;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ className, variant, href, disabled, ...props }, ref) => {
    return (
      <Link
        href={disabled ? '#' : href}
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      />
    );
  }
);
CustomLink.displayName = 'CustomLink';

export { CustomLink as Link, linkVariants };
