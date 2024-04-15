import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles/main.scss";
import { Todo } from "./types";
import { TodoForm } from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTask = (task: string) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), task, isCompleted: false },
    ]);
  };

  return (
    <>
      <header>
        <div className="forsta-logo"></div>
      </header>
      <div className="intro">
        <h2>Hi there! Let's get something done.</h2>
        <p>
          <i>Organize your plans here.</i>
        </p>
      </div>
      <TodoForm onTaskFormSubmit={(task) => saveTask(task)} />
      {/* TODO: Update TodoList component to display active and completed tasks with actions */}
      <TodoList todos={todos} />
    </>
  );
}
