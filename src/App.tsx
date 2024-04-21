import { createContext, useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { SidePanelContainer } from 'containers/SidePanel.container';
import { MainContentContainer } from 'containers/MainContent.container';
import { AppContextType, CategoryType, TaskType } from 'types';
import './styles.scss';
import { getCategories, getTasks } from 'api';

const defaultCategories = [
  { label: 'Personal', color: 'red' },
  { label: 'School', color: 'blue' },
  { label: 'Work', color: 'yellow' },
];
const defaultTasks = [
  { id: 1, category: 'Personal', text: 'Write UI tests', time: '08:01 am', done: false },
  { id: 2, category: 'School', text: 'Write the to-do app UI code', time: '11:42 pm', done: false },
  {
    id: 3,
    category: 'Work',
    text: 'Implement container-view design pattern',
    time: '06:20 pm',
    done: false,
  },
  {
    id: 4,
    category: 'Work',
    text: 'Make a base structure for the app',
    time: '10:45 am',
    done: true,
  },
];

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
  const [categories, setCategories] = useState<CategoryType[]>(defaultCategories);
  const [tasks, setTasks] = useState<TaskType[]>(defaultTasks);
  const [showDoneTasks, setShowDoneTasks] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then((categories) => setCategories(categories))
      .catch(() => console.log('Failed to fetch the categories from the server.'))
      .finally(() => setCategories([]));

    getTasks()
      .then((tasks) => setTasks(tasks))
      .catch(() => console.log('Failed to fetch the tasks from the server.'))
      .finally(() => setTasks([]));
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
