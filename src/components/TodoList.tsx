import React from 'react';
import useSWR from 'swr';
import { List } from '@mui/material';
import useTodoStore from '../store/useTodoStore';
import TaskItem from './TaskItem';
import { TodoItem, ApiTodoItem } from '../types';

const fetchTodos = (url: string): Promise<ApiTodoItem[]> => fetch(url).then(res => res.json());

interface TodoListProps {
  filter: string;
  todos?: TodoItem[]; // Add the todos prop to the interface
}

const TodoList: React.FC<TodoListProps> = ({ filter, todos }) => {
  const setTodo = useTodoStore((state) => state.setTodo);
  const todoList = useTodoStore((state) => state.todoList);

  useSWR<ApiTodoItem[]>('https://jsonplaceholder.typicode.com/todos', fetchTodos, {
    onSuccess: (data) => {
      const fetchedTodos = data.slice(0, 10).map((item) => ({
        id: item.id.toString(),
        title: item.title,
        isCompleted: item.completed,
      }));
      setTodo(fetchedTodos);
    },
  });

  const filteredTodo = (todos || todoList).filter((todo: TodoItem) => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <List>
      {filteredTodo.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
