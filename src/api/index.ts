import { CategoryType, TaskType } from 'types';

/**
 * Gets all the categories
 * @returns Promise which returns an object with all the categries
 */
export const getCategories = () =>
  fetch('http://localhost:8888/categories', {
    method: 'GET',
  }).then((response) => response.json());

export const insertOrUpdateCategories = (category: CategoryType) =>
  fetch('http://localhost:8888/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...category }),
  });

/**
 * Gets all the tasks
 * @returns Promise which returns an object with all the tasks
 */
export const getTasks = () =>
  fetch('http://localhost:8888/tasks', {
    method: 'GET',
  }).then((response) => response.json());

export const insertOrUpdateTasks = (task: TaskType) =>
  fetch('http://localhost:8888/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...task }),
  });
