import React, { useState } from "react";

import TodoList from "./components/TodoList";

import "./styles.scss";
import { Todo } from "./types";
import AddItem from "./components/AddItem";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy milk", isDone: true },
    { id: 2, text: "Buy bread", isDone: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <h2>To-Do List App</h2>
      <AddItem todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
