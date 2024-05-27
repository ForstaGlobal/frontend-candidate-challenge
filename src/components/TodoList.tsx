import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { List } from '@mui/material';
import useTodoStore from '../store/useTodoStore';
import TaskItem from './TaskItem';
import ToggleButtons from './ToggleButtons';
import { TodoItem } from '../types';
import { ApiTodoItem } from '../types';


// Fetcher function for SWR
const fetcher = (url: string): Promise<ApiTodoItem[]> => fetch(url).then((res) => res.json());

const TodoList: React.FC = () => {
  const setTodo = useTodoStore((state) => state.setTodo);
  const todoList = useTodoStore((state) => state.todoList);
  const [filter, setFilter] = useState('all');

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (data) {
      const mockTodo: TodoItem[] = data.slice(0, 10).map((item: ApiTodoItem) => ({
        id: item.id.toString(),
        title: item.title,
        isCompleted: item.completed,
      }));
      setTodo(mockTodo);
    }
  }, [data, setTodo]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const filteredTodo = todoList.filter((todo: TodoItem) => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <div>
      <ToggleButtons setFilter={setFilter} />
      <List>
        {filteredTodo.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
