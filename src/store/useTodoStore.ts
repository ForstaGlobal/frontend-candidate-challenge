import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TodoItem, TodoState } from '../types';
import { v4 as uuidv4 } from 'uuid';

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todoList: [],
      addTodoItem: (title: string) => {
        set((state) => ({
          todoList: [
            {
              id: uuidv4(),
              title,
              isCompleted: false,
            },
            ...state.todoList,
          ],
        }));
      },
      removeTodoItem: (id: string) => {
        set((state) => ({
          todoList: state.todoList.filter((todoItem) => todoItem.id !== id),
        }));
      },
      updateStatus: (id: string) => {
        set((state) => ({
          todoList: state.todoList.map((todoItem) =>
            todoItem.id === id
              ? { ...todoItem, isCompleted: !todoItem.isCompleted }
              : todoItem
          ),
        }));
      },
      updateTitle: (id: string, title: string) => {
        set((state) => ({
          todoList: state.todoList.map((todoItem) =>
            todoItem.id === id ? { ...todoItem, title } : todoItem
          ),
        }));
      },
      clearTodo: () => {
        set(() => ({
          todoList: [],
        }));
      },
      setTodo: (todos: TodoItem[]) => {
        set(() => ({
          todoList: todos,
        }));
      },
    }),
    {
      name: 'todo-storage',
    }
  )
);

export default useTodoStore;
