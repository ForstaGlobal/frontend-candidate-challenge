import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddTaskContainer } from 'containers/AddTask.container';
import { TestID } from 'testID';
import { CategoryType, SetStateType, TaskType } from 'types';

const mockTask: TaskType = {
  id: 1,
  category: 'Personal',
  text: 'Write UI tests',
  time: '08:01 am',
  done: false,
};

const mockCategory: CategoryType = {
  label: 'Personal',
  color: 'red',
};

describe('Task CRUD tests', () => {
  it('Adds a Task', async () => {
    const tasks: TaskType[] = [{ ...mockTask }];
    const categories: CategoryType[] = [{ ...mockCategory }];
    const setTasks: SetStateType<TaskType> = jest.fn();
    const testData = 'New Task';

    const view = render(
      <AddTaskContainer 
        categories={categories}
        tasks={tasks}
        setTasks={setTasks}
      />
    );
    expect(view).not.toBeUndefined();

    const textField = screen.getByTestId(TestID.AddTaskTextField);
    expect(textField).toBeInTheDocument();

    await userEvent.type(textField, testData);
    await fireEvent.keyUp(textField, { key: 'Enter', code: 13 });
    expect(setTasks).toHaveBeenCalled();
  });
});

