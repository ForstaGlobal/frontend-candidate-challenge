import { render, screen } from '@testing-library/react';
import { TestID } from 'testID';
import { FilterItem } from 'views/FilterItem.view';

const mockCategory = { label: 'Personal', color: 'red' };

describe('FilterItem.view tests', () => {
  it('Renders SimpleDialog', () => {
    const view = render(
      <FilterItem
        label={mockCategory.label}
        className={mockCategory.color}
        addFilter={false}
        clickHandler={() => {}}
        selected={false}
      />
    );
    expect(view).not.toBeUndefined();
  });

  it('Shows label', () => {
    render(
      <FilterItem
        label={mockCategory.label}
        className={mockCategory.color}
        addFilter={false}
        clickHandler={() => {}}
        selected={false}
      />
    );
    expect(screen.getByText(mockCategory.label)).toBeVisible();
  });

  it('Sets className to selected if the filter is active', () => {
    render(
      <FilterItem
        label={mockCategory.label}
        className={mockCategory.color}
        addFilter={false}
        clickHandler={() => {}}
        selected={true}
      />
    );
    const view = screen.getByTestId(TestID.FilterItemButton);
    expect(view).toHaveClass('selected');
  });
});
