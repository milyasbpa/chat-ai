import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Search, ChevronRight } from 'lucide-react';

import React from 'react';

type ButtonStoryProps = React.ComponentProps<typeof Button> & {
  showIconLeft?: boolean;
  isIconOnly?: boolean;
};

const meta = {
  title: 'Core/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    showIconLeft: {
      control: 'boolean',
      description: 'Show an icon on the left',
    },
    isIconOnly: {
      control: 'boolean',
      description: 'Show only an icon',
    },
  },
} satisfies Meta<ButtonStoryProps>;

export default meta;
type Story = StoryObj<ButtonStoryProps>;

export const Default: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Button',
    showIconLeft: false,
    isIconOnly: false,
  },
  render: ({
    showIconLeft,
    isIconOnly,
    children,
    ...args
  }: ButtonStoryProps) => {
    if (isIconOnly) {
      return (
        <Button {...args} className="w-9 px-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      );
    }

    return (
      <Button {...args}>
        {showIconLeft && <Search className="mr-2 h-4 w-4" />}
        {children}
      </Button>
    );
  },
};
