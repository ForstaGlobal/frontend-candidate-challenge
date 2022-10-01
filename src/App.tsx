import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles.scss";

export default function App() {
  const [todos] = useState([
    { text: "Add Input Element", done: true },
    { text: "Add Add Button", done: false },
    { text: "Get a Coffee", done: true },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} />
    </div>
  );
}
