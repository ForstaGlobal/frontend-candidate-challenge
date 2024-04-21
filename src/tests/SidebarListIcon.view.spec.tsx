import { render, screen } from '@testing-library/react';
import { TestID } from 'testID';
import { ListIcons, SidebarListIcon } from 'views/SidebarListIcon.view';

describe('SidebarTopBanner.view tests', () => {
  it('renders SidebarTopBanner', () => {
    const view = render(<SidebarListIcon icon={ListIcons.EventIcon} className="light-grey" />);
    expect(view).not.toBeUndefined();
  });

  it('Checks the sidebar list icon', () => {
    render(<SidebarListIcon icon={ListIcons.EventIcon} className="light-grey" />);
    const view = screen.getByTestId(TestID.SidebarListIcon);
    expect(view).toHaveClass('light-grey');
  });
});
