import { render } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo Component', () => {
  it('renders default logo by default', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Default logo has width="86"
    expect(svg).toHaveAttribute('width', '86');
  });

  it('renders mark logo when variant="mark"', () => {
    const { container } = render(<Logo variant="mark" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Mark logo has width="32"
    expect(svg).toHaveAttribute('width', '32');
  });
});
