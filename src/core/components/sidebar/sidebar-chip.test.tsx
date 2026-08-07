import { render, screen } from '@testing-library/react';
import { SidebarChip } from './sidebar-chip';
import userEvent from '@testing-library/user-event';

describe('SidebarChip Component', () => {
  it('renders default chip correctly', () => {
    render(<SidebarChip>Default Chip</SidebarChip>);
    const chip = screen.getByRole('button', { name: 'Default Chip' });
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveClass('text-neutral-600');
  });

  it('renders selected chip correctly', () => {
    render(<SidebarChip selected>Selected Chip</SidebarChip>);
    const chip = screen.getByRole('button', { name: 'Selected Chip' });
    expect(chip).toHaveClass('bg-neutral-50');
    expect(chip).toHaveClass('text-indigo-700');
  });

  it('allows click events', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<SidebarChip onClick={onClick}>Clickable</SidebarChip>);
    const chip = screen.getByRole('button', { name: 'Clickable' });
    await user.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
