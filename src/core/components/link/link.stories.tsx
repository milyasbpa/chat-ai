import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Link } from './link';
import { ExternalLink } from 'lucide-react';

import React from 'react';

type LinkStoryProps = React.ComponentProps<typeof Link> & {
  isIconLink?: boolean;
};

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'icon'],
      description: 'The visual style of the link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    isIconLink: {
      control: 'boolean',
      description: 'Show only an icon',
    },
  },
} satisfies Meta<LinkStoryProps>;

export default meta;
type Story = StoryObj<LinkStoryProps>;

export const Default: Story = {
  args: {
    variant: 'primary',
    href: '#',
    disabled: false,
    children: 'Link Text',
    isIconLink: false,
  },
  render: ({ isIconLink, children, ...args }: LinkStoryProps) => {
    if (isIconLink) {
      return (
        <Link
          {...args}
          variant={args.variant === 'primary' ? 'icon' : args.variant}
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      );
    }

    return <Link {...args}>{children}</Link>;
  },
};
