import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles/main.scss";
import { Todo } from "./types";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <header>
        <div className="forsta-logo"></div>
      </header>
      <div className="intro">
        <h2>Hi there! Let's get something done.</h2>
        <p><i>Organize your plans here.</i></p>

        {/* TODO: Add form with input to add new task */}
        {/* TODO: Update TodoList component to display active and completed tasks with actions */}
        <TodoList todos={todos} />
      </div>
    </>
  );
}
