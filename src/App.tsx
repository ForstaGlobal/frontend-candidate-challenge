import React, { useState } from "react";

import { TodoList } from "./components/TodoList/TodoList";

import "./styles.scss";
import { Todo } from "./types";
import { AddItem } from "./components/AddItem/AddItem";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy milk", isDone: true },
    { id: 2, text: "Buy bread", isDone: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <AddItem />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
