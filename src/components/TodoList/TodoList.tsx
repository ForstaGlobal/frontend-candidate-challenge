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

  const handleDelete = (id: number) => {
    const todosCopy = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(todosCopy);
  };

  const handleEdit = (id: number, value: string) => {
    const todosCopy = todos.map((item) => {
      if (item.id === id) {
        return { ...item, text: value };
      } else {
        return item;
      }
    });
    setTodos(todosCopy);
  };

  return (
    <ul className="list-container">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleSelect={handleSelect}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};
