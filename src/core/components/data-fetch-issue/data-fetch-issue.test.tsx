import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { DataFetchIssue } from './data-fetch-issue';

describe('DataFetchIssue', () => {
  it('renders with default props', () => {
    render(<DataFetchIssue />);
    expect(screen.getByText('Unexpected error')).toBeInTheDocument();
    expect(
      screen.getByText(/We're facing some issues at the moment/i)
    ).toBeInTheDocument();
  });

  it('renders custom title and description', () => {
    render(
      <DataFetchIssue title="Custom Title" description="Custom Description" />
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(<DataFetchIssue icon={<div data-testid="custom-icon" />} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
});
