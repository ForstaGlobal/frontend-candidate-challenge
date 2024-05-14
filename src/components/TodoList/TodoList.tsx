import React, { useMemo } from "react";
import { Todo } from "../../types";
import TodoItem from "../TodoItem";
import "./style.scss";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const totalCount = useMemo(() => {
    return todos.length;
  }, [todos.length]);

  const completedTasksCount = useMemo(() => {
    return todos.filter((todo) => todo.isDone).length;
  }, [todos]);

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
    <div className="list-container">
      <div className="list-container__count">
        <p>
          <span>Total</span>
          <span className="pill">{totalCount}</span>
        </p>
        <p>
          <span>Completed</span>
          <span className="pill">
            {completedTasksCount} of {totalCount}
          </span>
        </p>
      </div>
      <ul>
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
    </div>
  );
};
