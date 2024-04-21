import { insertOrUpdateCategories, insertOrUpdateTasks, removeTask } from 'api';
import { CategoryType, ServerMessage, TaskType } from 'types';

export const persistTask = (task: TaskType) => {
  insertOrUpdateTasks(task)
    .then((response: ServerMessage) => {
      console.log('server response: ', response.message);
    })
    .catch((err) => console.error(err));
};

export const deleteTask = (id: number) => {
  removeTask(id)
    .then((response: ServerMessage) => {
      console.log('server response: ', response.message);
    })
    .catch((err) => console.error(err));
};

export const persistCategory = (category: CategoryType) => {
  insertOrUpdateCategories(category)
    .then((response: ServerMessage) => {
      console.log('server response: ', response.message);
    })
    .catch((err) => console.error(err));
};
