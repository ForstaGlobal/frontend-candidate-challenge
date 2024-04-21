import { createContext, useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { SidePanelContainer } from 'containers/SidePanel.container';
import { MainContentContainer } from 'containers/MainContent.container';
import { AppContextType, CategoryType, TaskType } from 'types';
import { getCategories, getTasks } from 'api';
import './styles.scss';

export const AppContext = createContext<AppContextType>({
  categories: [],
  tasks: [],
  setCategories: () => {},
  setTasks: () => {},
  showDoneTasks: false,
  setShowDoneTasks: () => {},
  filter: null,
  setFilter: () => {},
});

export default function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showDoneTasks, setShowDoneTasks] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then((categories) => setCategories(categories))
      .catch(() => {
        console.log('Failed to fetch the categories from the server.');
        setCategories([]);
      });

    getTasks()
      .then((tasks) =>
        setTasks(() =>
          tasks.map((task: TaskType) => {
            const obj = { ...task, done: task.done ? true : false };
            return obj;
          })
        )
      )
      .catch(() => {
        console.log('Failed to fetch the tasks from the server.');
        setTasks([]);
      });
  }, []);

  const appContextValue = useMemo(
    () => ({
      categories,
      setCategories,
      tasks,
      setTasks,
      showDoneTasks,
      setShowDoneTasks,
      filter,
      setFilter,
    }),
    [categories, setCategories, tasks, setTasks, showDoneTasks, filter, setFilter]
  );

  return (
    <Stack className="app" direction="row">
      <Container maxWidth="lg">
        <Stack direction="row" className="sections">
          <AppContext.Provider value={appContextValue}>
            <SidePanelContainer />
            <MainContentContainer />
          </AppContext.Provider>
        </Stack>
      </Container>
    </Stack>
  );
}
