import React from 'react';
import { useAppSelector } from '../app/hooks';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <ul className="todoList">
      {todos.map(({ text, done, id }) => (
        <li key={id}>
          <TodoItem text={text} done={done} id={id} />
        </li>
      ))}
    </ul>
  );
};
