import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/core/utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = '', fallback, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200',
          className
        )}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="20px"
          />
        ) : (
          <span className="text-[10px] font-medium text-neutral-600 uppercase">
            {fallback ||
              alt
                .split(' ')
                .map((n) => n[0])
                .join('')
                .substring(0, 2) ||
              '?'}
          </span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';
