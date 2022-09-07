import React from "react";

type TodoListProps = {
  todos: any[];
};
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <span data-testid={`todo${i}`}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};
