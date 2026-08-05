import type { StoryObj } from '@storybook/nextjs-vite';
import { DataFetchIssue } from './data-fetch-issue';

const meta = {
  title: 'Components/DataFetchIssue',
  component: DataFetchIssue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataFetchIssue>;

export const Default: Story = {
  args: {},
};
