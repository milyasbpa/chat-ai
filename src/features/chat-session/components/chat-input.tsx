import * as React from 'react';
import { TextField } from '@/core/components/textfield/textfield';
import { Button } from '@/core/components/button/button';

export function ChatInput() {
  const [value, setValue] = React.useState('');
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to allow shrinking
      textarea.style.height = '44px';
      // Set to scrollHeight, respecting max-height defined in CSS/style
      textarea.style.height = `${Math.max(44, textarea.scrollHeight)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Handle submit
      if (value.trim()) {
        setValue('');
      }
    }
  };

  return (
    <div className="flex w-full flex-row items-end gap-2">
      <TextField
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="flex-1 overflow-y-auto"
        rows={1}
        style={{ minHeight: '44px', maxHeight: '144px' }}
      />
      <Button
        variant="primary"
        disabled={!value.trim()}
        className="h-[44px] w-[44px] shrink-0 border-none px-0 shadow-none transition-colors disabled:bg-neutral-100 disabled:text-neutral-400 disabled:opacity-100 md:w-auto md:px-4"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="shrink-0"
        >
          <path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
        </svg>
        <span className="ml-1 hidden font-medium md:inline">Submit</span>
      </Button>
    </div>
  );
}
