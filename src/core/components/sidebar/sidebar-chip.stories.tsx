import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SidebarChip } from './sidebar-chip';

const meta: Meta<typeof SidebarChip> = {
  title: 'Components/SidebarChip',
  component: SidebarChip,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[208px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarChip>;

export const Default: Story = {
  args: {
    selected: false,
    children: 'Imagine you are the great writer',
    icon: (
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
    ),
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    children: 'Ongoing prompt',
    icon: (
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
    ),
  },
};
