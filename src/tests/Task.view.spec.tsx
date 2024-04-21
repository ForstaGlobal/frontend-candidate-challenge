import { render, screen } from '@testing-library/react';
import { TestID } from 'testID';
import { TaskType } from 'types';
import { Task } from 'views/Task.view';

const mockTask: TaskType = {
  id: 1,
  category: 'Personal',
  text: 'Write UI tests',
  time: '08:01 am',
  done: false,
};

describe('Task.view tests', () => {
  it('renders Task', () => {
    const task = { ...mockTask };
    const view = render(
      <Task
        task={task}
        onChange={() => {}}
        getTaskColor={() => 'red'}
        onDelete={() => {}}
        onDone={() => (task.done = !task.done)}
      />
    );
    expect(view).not.toBeUndefined();
  });

  it('renders Task TextField', () => {
    const task = { ...mockTask };
    render(
      <Task
        task={task}
        onChange={() => {}}
        getTaskColor={() => 'red'}
        onDelete={() => {}}
        onDone={() => (task.done = !task.done)}
      />
    );
    const textField = screen.getByTestId(TestID.TaskViewTextField);
    expect(textField).toBeInTheDocument();
    expect(screen.getByPlaceholderText('What is your next task?')).toBeInTheDocument();
    expect(screen.getByDisplayValue(task.text)).toBeDefined();
  });

  it('renders Task category', () => {
    const task = { ...mockTask };
    render(
      <Task
        task={task}
        onChange={() => {}}
        getTaskColor={() => 'red'}
        onDelete={() => {}}
        onDone={() => (task.done = !task.done)}
      />
    );
    const categoryCircle = screen.getByTestId(TestID.TaskViewCategory);
    expect(categoryCircle).toBeInTheDocument();
    expect(categoryCircle).toHaveClass('red');
  });
});
