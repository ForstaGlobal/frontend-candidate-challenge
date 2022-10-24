import React from 'react';
import { Todo } from '../types';

type TodoListProps = {
  todos: any[];
};
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className='todoList'>
      {todos.map((todo: Todo, i) => (
        <li key={todo.id}>
          <span data-testid={`todo${todo.id}`}>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};
