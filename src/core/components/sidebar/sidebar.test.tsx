import { render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';

// Mock the Link component since it uses next/link which might fail in pure Jest environments without setup
jest.mock('@/core/components/link/link', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Sidebar Component', () => {
  it('renders correctly in guest state', () => {
    render(<Sidebar authState="guest" />);
    // Check for logo
    expect(screen.getByText('Start new chat')).toBeInTheDocument();

    // Check for guest card
    expect(screen.getByText('Let’s create an account')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Create account')).toBeInTheDocument();
  });

  it('renders correctly in signedIn state', () => {
    render(<Sidebar authState="signedIn" userName="Alice" />);

    // Guest card should not be present
    expect(
      screen.queryByText('Let’s create an account')
    ).not.toBeInTheDocument();

    // User profile should be present
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});
