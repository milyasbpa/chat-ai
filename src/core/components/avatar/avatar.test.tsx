import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="Test User" />);
    const img = screen.getByRole('img', { name: 'Test User' });
    expect(img).toBeInTheDocument();
  });

  it('renders fallback when src is not provided', () => {
    render(<Avatar alt="Test User" fallback="T" />);
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('renders first letter of alt when fallback is not provided', () => {
    render(<Avatar alt="User" />);
    expect(screen.getByText('U')).toBeInTheDocument();
  });
});
