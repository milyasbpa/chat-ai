import * as React from 'react';
import { cn } from '@/core/utils/cn';
import { Logo } from '@/core/components/logo/logo';
import { Button } from '@/core/components/button/button';
import { Link } from '@/core/components/link/link';
import { SidebarChip } from './sidebar-chip';
import { Avatar } from '@/core/components/avatar/avatar';
import { AccountDropdown } from '@/core/components/account-dropdown/account-dropdown';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  authState?: 'guest' | 'signedIn';
  userName?: string;
  userAvatar?: string;
  onSignInClick?: () => void;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      authState = 'guest',
      userName = 'John Doe',
      userAvatar,
      onSignInClick,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'flex h-screen w-[320px] flex-col border-r border-neutral-200 bg-white px-4 py-6 lg:w-[240px]',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between px-1 py-4">
          <Logo />
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-3">
            <SidebarChip
              selected
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  />
                </svg>
              }
            >
              Ongoing prompt
            </SidebarChip>
            <SidebarChip
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            >
              Previous chat 1
            </SidebarChip>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="secondary" className="w-full justify-start">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0"
            >
              <g clipPath="url(#clip0_0_3)">
                <path
                  d="M13.4727 2.50549L14.3885 4.22273L16.1057 5.1386L14.3885 6.05446L13.4727 7.7717L12.5568 6.05446L10.8395 5.1386L12.5568 4.22273L13.4727 2.50549ZM9.07447 8.14785L12.5467 9.99972L9.07447 11.8515L7.22263 15.3238L5.37078 11.8515L1.89856 9.99972L5.37078 8.14785L7.22263 4.67563L9.07447 8.14785ZM9.59531 9.99972L8.04791 9.17445L7.22263 7.62702L6.39735 9.17445L4.84995 9.99972L6.39735 10.825L7.22263 12.3724L8.04791 10.825L9.59531 9.99972ZM15.3245 13.009L14.1671 10.8388L13.0097 13.009L10.8395 14.1664L13.0097 15.3238L14.1671 17.4939L15.3245 15.3238L17.4946 14.1664L15.3245 13.009Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3">
                  <rect
                    width="16.6667"
                    height="16.6667"
                    fill="white"
                    transform="translate(1.66663 1.66663)"
                  />
                </clipPath>
              </defs>
            </svg>
            Start new chat
          </Button>

          {authState === 'signedIn' ? (
            <AccountDropdown>
              <button className="flex w-full items-center gap-1 rounded px-[14px] py-[10px] transition-colors hover:bg-neutral-50">
                <Avatar src={userAvatar} alt={userName} />
                <span className="flex-1 truncate px-0.5 text-left text-[14px] leading-[20px] font-medium text-neutral-900">
                  {userName}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-neutral-500"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </AccountDropdown>
          ) : (
            <div className="flex flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] leading-[20px] font-medium text-neutral-900">
                  Let’s create an account
                </h3>
                <p className="text-[12px] leading-[16px] font-normal text-neutral-600">
                  Save your chat history, share chat, and personalize your
                  experience.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Button className="w-full" onClick={onSignInClick}>
                  Sign in
                </Button>
                <Link
                  href="/register"
                  className="w-full justify-center text-center"
                >
                  Create account
                </Link>
              </div>
            </div>
          )}
        </div>
      </aside>
    );
  }
);
Sidebar.displayName = 'Sidebar';
