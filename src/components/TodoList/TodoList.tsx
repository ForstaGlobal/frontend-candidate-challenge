import React from "react";
import { Todo } from "../../types";
import TodoItem from "../TodoItem";
import "./style.scss";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const handleSelect = (id: number) => {
    const todosCopy = [...todos];
    const i = todosCopy.findIndex((item) => item.id === id);
    todosCopy[i].isDone = !todosCopy[i].isDone;
    setTodos(todosCopy);
  };

  return (
    <ul className="list-container">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleSelect={handleSelect} />
      ))}
    </ul>
  );
};
