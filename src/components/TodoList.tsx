import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import useTodoStore from '../store/useTodoStore';
import TaskItem from './TaskItem';
import ToggleButtons from './ToggleButtons';
import { TodoItem } from '../types';

const TodoList: React.FC = () => {
  const todoList = useTodoStore((state) => state.todoList);
  const setTodo = useTodoStore((state) => state.setTodo);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const mockTodo: TodoItem[] = data.slice(0, 10).map((item: TodoItem) => ({
          id: item.id.toString(),
          title: item.title,
          isCompleted: item.isCompleted,
        }));
        setTodo(mockTodo);
      });
  }, [setTodo]);

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
