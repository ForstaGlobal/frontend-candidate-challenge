import { render, screen } from '@testing-library/react';
import { AddFilterItem } from 'views/AddFilterItem.view';

describe('AddFilterIitem.view tests', () => {
  it('Renders SimpleDialog', () => {
    const view = render(<AddFilterItem value="" handler={() => {}} onChange={() => {}} />);
    expect(view).not.toBeUndefined();
  });

  it('Shows filter text', () => {
    render(<AddFilterItem value="New Filter" handler={() => {}} onChange={() => {}} />);
    expect(screen.getByDisplayValue('New Filter')).toBeVisible();
  });

  it('Shows the placeholder when text is empty', () => {
    render(<AddFilterItem value="" handler={() => {}} onChange={() => {}} />);
    const view = screen.getByPlaceholderText('Add new');
    expect(view).not.toBeUndefined();
    expect(screen.getByDisplayValue('')).toBeVisible();
  });
});
