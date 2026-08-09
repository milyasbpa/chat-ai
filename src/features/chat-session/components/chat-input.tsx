import * as React from 'react';
import { TextField } from '@/core/components/textfield/textfield';
import { Button } from '@/core/components/button/button';
import { SendIcon } from '@/core/icons/send-icon';

interface ChatInputProps {
  placeholderText?: string;
}

export function ChatInput({
  placeholderText = 'Ask me anything...',
}: ChatInputProps) {
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
        placeholder={placeholderText}
        className="max-h-[144px] min-h-[44px] flex-1 overflow-y-auto"
        rows={1}
      />
      <Button
        variant="primary"
        disabled={!value.trim()}
        className="h-[44px] w-[44px] shrink-0 border-none px-0 shadow-none transition-colors disabled:bg-neutral-100 disabled:text-neutral-400 disabled:opacity-100 md:w-auto md:px-4"
      >
        <SendIcon className="shrink-0" />
        <span className="ml-1 hidden font-medium md:inline">Submit</span>
      </Button>
    </div>
  );
}
