import Stack from '@mui/material/Stack';
import { MainContentTopBanner } from 'views/MainContentTopBanner.view';
import { useCallback, useContext } from 'react';
import { AppContext } from 'App';
import { TasksContainer } from './Tasks.container';
import { AddTaskContainer } from './AddTask.container';

export const MainContentContainer = () => {
  const { categories, tasks, setTasks, filter, setFilter, showDoneTasks } = useContext(AppContext);

  const getTaskColor = useCallback(
    (taskCategory: string) => {
      const matchingCategory = categories.find((category) => category.label === taskCategory);
      return matchingCategory?.color ?? 'pink';
    },
    [categories]
  );

  const getFocusedTask = () => tasks.filter((task) => !task.done)[0];

  return (
    <Stack direction="column" className="main-content" p={2} width="60%">
      <MainContentTopBanner focusedTask={getFocusedTask()} />

      <AddTaskContainer categories={categories} tasks={tasks} setTasks={setTasks} />

      <TasksContainer
        getTaskColor={getTaskColor}
        tasks={tasks}
        setTasks={setTasks}
        showDoneTasks={showDoneTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </Stack>
  );
};
