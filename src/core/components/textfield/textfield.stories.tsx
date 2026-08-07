import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextField } from './textfield';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    placeholder: 'Ask me anything...',
    disabled: false,
    error: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    defaultValue: 'Hello, this is a filled text field!',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const ErrorFilled: Story = {
  args: {
    error: true,
    defaultValue: 'This text field has an error.',
  },
};
