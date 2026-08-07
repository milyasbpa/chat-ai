import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { QuickstartCard } from './quickstart-card';
import * as React from 'react';

const meta: Meta<typeof QuickstartCard> = {
  title: 'Components/QuickstartCard',
  component: QuickstartCard,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-white p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof QuickstartCard>;

export const Default: Story = {
  args: {
    title: 'Draft email',
    description: 'Generate email for any occasion you need.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="nonzero"
          clipRule="evenodd"
          d="M0.24283 5.68817L9.4895 0.142413C9.8062 -0.0475375 10.2019 -0.0474675 10.5185 0.142603L19.7573 5.68814C19.9079 5.77851 20 5.94124 20 6.11684L20 18.8338C20 19.3861 19.5523 19.8338 19 19.8338L1 19.8338C0.44772 19.8338 0 19.3861 0 18.8338L0 6.11696C0 5.9413 0.09218 5.77852 0.24283 5.68817ZM2 6.96642L2 17.8338L18 17.8338L18 6.96595L10.0037 2.16619L2 6.96642ZM10.0597 12.5321L15.3556 8.06913L16.6444 9.59848L10.074 15.1356L3.36401 9.60548L4.63599 8.06211L10.0597 12.5321Z"
        />
      </svg>
    ),
  },
};
