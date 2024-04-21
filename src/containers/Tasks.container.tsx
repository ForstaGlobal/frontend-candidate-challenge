import React from 'react';
import Stack from '@mui/material/Stack';
import { Task } from 'views/Task.view';
import { SetStateType, SetStateTypeSingle, TaskType } from 'types';

export const TasksContainer: React.FC<{
  getTaskColor: (taskCategory: string) => string;
  tasks: TaskType[];
  setTasks: SetStateType<TaskType>;
  showDoneTasks: boolean;
  filter: string | null;
  setFilter: SetStateTypeSingle<string | null>;
}> = ({ getTaskColor, tasks, setTasks, showDoneTasks, filter, setFilter }) => {
  const onChange = (id: number, str: string) => {
    const clonedTasks = [...tasks];
    for (const task of clonedTasks) {
      if (task.id === id) {
        task.text = str;
      }
    }
    setTasks(clonedTasks);
  };

  const onDelete = (id: number) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const onDone = (id: number) => {
    const clonedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(clonedTasks);
  };

  const filterTasksByDone = (items: TaskType[]): TaskType[] => {
    return items.filter((task) => task.done === showDoneTasks);
  };

  const filterTasksByCategory = (items: TaskType[]): TaskType[] => {
    if (filter) {
      return items.filter((task) => task.category === filter);
    }
    return items;
  };

  const getFilteredTasks = (): TaskType[] => {
    const filter1 = filterTasksByDone(tasks);
    const filter2 = filterTasksByCategory(filter1);
    return filter2;
  };

  return (
    <Stack className="tasks" mt={5} gap={2} height="40vh" sx={{ overflowY: 'auto' }}>
      {getFilteredTasks().map((task) => (
        <Task
          key={task.id}
          task={task}
          getTaskColor={getTaskColor}
          onChange={onChange}
          onDelete={onDelete}
          onDone={onDone}
        />
      ))}
    </Stack>
  );
};