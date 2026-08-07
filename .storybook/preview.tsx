import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

const customViewports = {
  mobile: {
    name: 'Mobile (375px)',
    styles: { width: '375px', height: '812px' },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet (768px)',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop (1440px)',
    styles: { width: '1440px', height: '1024px' },
    type: 'desktop',
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[100vh] bg-white p-4 font-sans text-neutral-900 antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
