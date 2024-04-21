import { render, screen } from '@testing-library/react';
import { SidebarListButton } from 'views/SidebarListButton.view';
import { ListIcons } from 'views/SidebarListIcon.view';

describe('SidebarListButton.view tests', () => {
  it('renders SidebarTopBanner', () => {
    const view = render(
      <SidebarListButton label="TestLabel" className="red" icon={ListIcons.EventIcon} />
    );
    expect(view).not.toBeUndefined();
  });

  it('Checks SidebarListButton label', () => {
    render(<SidebarListButton label="TestLabel" className="red" icon={ListIcons.EventIcon} />);
    const view = screen.getByText('TestLabel');
    expect(view).toBeInTheDocument();
  });
});
