import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    alt: 'John Doe',
  },
};

export const Fallback: Story = {
  args: {
    fallback: 'J',
    alt: 'John Doe',
  },
};
