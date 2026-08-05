import { render, screen } from '@testing-library/react';
import { Link } from './link';

describe('Link Component', () => {
  it('renders correctly as a text link', () => {
    render(<Link href="/test">My Link</Link>);
    const link = screen.getByRole('link', { name: /my link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('text-indigo-700'); // Check primary variant
  });

  it('renders as icon variant', () => {
    render(
      <Link href="/test" variant="icon">
        Icon Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /icon link/i });
    expect(link).toHaveClass('text-neutral-500');
  });

  it('handles disabled state correctly', () => {
    render(
      <Link href="/test" disabled>
        Disabled Link
      </Link>
    );
    const link = screen.getByRole('link', { name: /disabled link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('href', '#'); // href should be removed/replaced when disabled
    expect(link).toHaveAttribute('tabIndex', '-1');
  });
});
