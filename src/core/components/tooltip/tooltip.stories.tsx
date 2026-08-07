import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip } from './tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: (
      <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
        Hover me
      </button>
    ),
    side: 'bottom',
    align: 'center',
  },
};

export const Placement: Story = {
  args: {
    content: '',
    children: <span />,
  },
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Top tooltip" side="top">
        <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
          Top
        </button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
          Right
        </button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
          Bottom
        </button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <button className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
          Left
        </button>
      </Tooltip>
    </div>
  ),
};
