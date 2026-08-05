import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    authState: {
      control: 'radio',
      options: ['guest', 'signedIn'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Guest: Story = {
  args: {
    authState: 'guest',
  },
};

export const SignedIn: Story = {
  args: {
    authState: 'signedIn',
    userName: 'John Doe',
  },
};
