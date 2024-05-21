import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles/styles.scss";

export default function App() {
  const [todos] = useState([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} />
    </div>
  );
}
