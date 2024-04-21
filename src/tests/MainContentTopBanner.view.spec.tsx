import { render, screen } from '@testing-library/react';
import { TestID } from 'testID';
import { TaskType } from 'types';
import { MainContentTopBanner } from 'views/MainContentTopBanner.view';

const mockTask: TaskType = {
  id: 1,
  category: 'Personal',
  text: 'Write UI tests',
  time: '08:01 am',
  done: false,
};

describe('MainContentTopBanner.view tests', () => {
  it('Renders SimpleDialog', () => {
    const view = render(<MainContentTopBanner focusedTask={mockTask} />);
    expect(view).not.toBeUndefined();
  });

  it('Shows today main focus', () => {
    render(<MainContentTopBanner focusedTask={mockTask} />);
    expect(screen.getByText('Today main foucs')).toBeVisible();
    const view = screen.getByTestId(TestID.MainContentTopBannerFocusedTask);
    expect(view.textContent).toBe(mockTask.text);
  });

  it('Not to show main focus when empty', () => {
    render(<MainContentTopBanner />);
    expect(screen.getByText('Today main foucs')).toBeVisible();
    const view = screen.getByTestId(TestID.MainContentTopBannerFocusedTask);
    expect(view.textContent).toBe('');
  });
});
