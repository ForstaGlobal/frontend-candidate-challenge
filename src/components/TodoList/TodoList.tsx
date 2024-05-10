import React from "react";
import { Todo } from "../../types";
import TodoItem from "../TodoItem";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
