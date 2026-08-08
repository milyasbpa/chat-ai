import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface AccountDropdownProps {
  children: React.ReactNode;
  onSignOutClick?: () => void;
}

export const AccountDropdown = ({
  children,
  onSignOutClick,
}: AccountDropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          sideOffset={8}
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 flex w-[var(--radix-dropdown-menu-trigger-width)] flex-col rounded-lg border border-neutral-200 bg-white p-1 shadow-sm"
        >
          <DropdownMenu.Item
            onSelect={onSignOutClick}
            className="flex w-full cursor-pointer items-center gap-1 rounded px-[14px] py-[10px] text-neutral-900 transition-colors outline-none hover:bg-neutral-50 focus:bg-neutral-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[14px] leading-[20px] font-medium">
              Sign out
            </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
