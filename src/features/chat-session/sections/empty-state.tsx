import * as React from 'react';
import { QuickstartCard } from '@/core/components/quickstart-card/quickstart-card';

import { MailIcon } from '@/core/icons/mail-icon';
import { PencilIcon } from '@/core/icons/pencil-icon';
import { TimelineIcon } from '@/core/icons/timeline-icon';
import { ChatIcon } from '@/core/icons/chat-icon';

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

      <div className="mx-auto grid w-full max-w-[750px] grid-cols-2 gap-4 px-4 lg:grid-cols-4">
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
