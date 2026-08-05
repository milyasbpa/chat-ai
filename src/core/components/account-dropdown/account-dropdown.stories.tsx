import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AccountDropdown } from './account-dropdown';

const meta = {
  title: 'Core/AccountDropdown',
  component: AccountDropdown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccountDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <button className="flex items-center gap-2 rounded px-[14px] py-[10px] hover:bg-neutral-50">
        <span>Click me to open</span>
      </button>
    ),
  },
};
