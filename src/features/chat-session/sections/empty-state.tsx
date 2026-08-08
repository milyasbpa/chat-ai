import * as React from 'react';
import { QuickstartCard } from '@/core/components/quickstart-card/quickstart-card';

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PencilIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const TimelineIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const ChatIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export function EmptyState() {
  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-10 lg:gap-20">
      <h1 className="max-w-2xl px-4 text-center text-[24px] leading-[32px] font-medium text-neutral-900 lg:text-[30px] lg:leading-[36px]">
        <span className="font-semibold text-neutral-900">
          Hey, I’m Chat AI.
        </span>{' '}
        <span className="text-neutral-500">
          Your AI assistant and companion for any occasion.
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        <QuickstartCard
          title="Draft email"
          description="Generate email for any occasion you need."
          icon={<MailIcon />}
          iconWrapperClassName="bg-indigo-50 text-indigo-700"
        />
        <QuickstartCard
          title="Write an Essay"
          description="Generate essay for any occasion you need."
          icon={<PencilIcon />}
          iconWrapperClassName="bg-green-50 text-green-700"
        />
        <QuickstartCard
          title="Planning"
          description="Plan for any occasion, from holiday to family."
          icon={<TimelineIcon />}
          iconWrapperClassName="bg-fuchsia-50 text-fuchsia-700"
        />
        <QuickstartCard
          title="Assistant"
          description="Become your personal assistant. Helping you."
          icon={<ChatIcon />}
          iconWrapperClassName="bg-amber-50 text-amber-700"
        />
      </div>
    </div>
  );
}
