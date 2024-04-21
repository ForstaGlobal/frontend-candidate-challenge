import { render, screen } from '@testing-library/react';
import { AddTask } from 'views/AddTask.view';

describe('AddTask.view tests', () => {
  it('Renders SimpleDialog', () => {
    const view = render(<AddTask value="New Task" onChange={() => {}} onKeyUp={() => {}} />);
    expect(view).not.toBeUndefined();
  });

  it('Shows task text', () => {
    render(<AddTask value="New Task" onChange={() => {}} onKeyUp={() => {}} />);
    expect(screen.getByDisplayValue('New Task')).toBeVisible();
  });

  it('Shows the placeholder when text is empty', () => {
    render(<AddTask value='' onChange={() => {}} onKeyUp={() => {}} />);
    const view = screen.getByPlaceholderText('What is your next task?');
    expect(view).not.toBeUndefined();
    expect(screen.getByDisplayValue('')).toBeVisible();
  });
});
