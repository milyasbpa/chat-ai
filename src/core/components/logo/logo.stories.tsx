import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'mark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Mark: Story = {
  args: {
    variant: 'mark',
  },
};
