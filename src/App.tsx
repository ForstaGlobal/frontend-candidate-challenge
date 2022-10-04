import React, { useState } from "react";

import { Toaster } from 'react-hot-toast';

import { TodoList } from "./components/TodoList/TodoList";


import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);
  const [ show, setShow] = useState(false)

  return (
    <div className="todoListApp">
      <Toaster />
      <div className="forsta-logo" />
      <TodoList todos={todos} setShow={setShow} setTodos={setTodos} show={show}/>
    </div>
  );
}
