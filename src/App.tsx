import React from "react";

import { TodoList } from "./containers/TodoList";

import "./styles.scss"

export default function App() {

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList />
    </div>
  );
}