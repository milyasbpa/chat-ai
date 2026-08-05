import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuickstartCard } from './quickstart-card';

describe('QuickstartCard', () => {
  it('renders title and description', () => {
    render(
      <QuickstartCard
        title="Draft email"
        description="Generate email for any occasion you need."
      />
    );
    expect(screen.getByText('Draft email')).toBeInTheDocument();
    expect(
      screen.getByText('Generate email for any occasion you need.')
    ).toBeInTheDocument();
  });

  it('renders icon if provided', () => {
    render(
      <QuickstartCard
        title="Test"
        description="Test desc"
        icon={<div data-testid="test-icon" />}
      />
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(
      <QuickstartCard title="Test" description="Test desc" onClick={onClick} />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
