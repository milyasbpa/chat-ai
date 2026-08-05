import { render, screen } from '@testing-library/react';
import { TextField } from './textfield';
import userEvent from '@testing-library/user-event';

describe('TextField Component', () => {
  it('renders correctly with placeholder', () => {
    render(<TextField placeholder="Type here..." />);
    const textarea = screen.getByPlaceholderText('Type here...');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass('border-neutral-200');
  });

  it('renders correctly with error state', () => {
    render(<TextField placeholder="Error..." error />);
    const textarea = screen.getByPlaceholderText('Error...');
    expect(textarea).toHaveClass('border-red-300');
  });

  it('handles disabled state', () => {
    render(<TextField placeholder="Disabled..." disabled />);
    const textarea = screen.getByPlaceholderText('Disabled...');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('disabled:border-neutral-100');
  });

  it('allows user typing', async () => {
    const user = userEvent.setup();
    render(<TextField placeholder="Type here..." />);
    const textarea = screen.getByPlaceholderText('Type here...');
    await user.type(textarea, 'Hello World');
    expect(textarea).toHaveValue('Hello World');
  });
});
