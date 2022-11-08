import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import "./styles.scss";

export default function App() {

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList/>
    </div>
  );
}
