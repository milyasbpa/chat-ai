import * as React from 'react';
import { TextField } from '@/core/components/textfield/textfield';
import { Button } from '@/core/components/button/button';

export function ChatInput() {
  return (
    <div className="flex w-full flex-row items-end gap-2">
      <TextField
        placeholder="Ask me anything..."
        className="flex-1"
        rows={1}
        style={{ minHeight: '44px', height: '44px' }}
      />
      <Button
        className="h-[44px] shrink-0 border-none bg-neutral-100 px-4 text-neutral-400 shadow-none hover:bg-neutral-100 disabled:opacity-100"
        disabled
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
        </svg>
        <span className="ml-1 font-medium">Submit</span>
      </Button>
    </div>
  );
}
