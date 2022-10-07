import React, { useState } from "react";

import { Toaster } from 'react-hot-toast';

import { TodoList } from "./components/TodoList/TodoList";


import "./styles.scss";

export default function App() {
  const [ show, setShow] = useState(false)

  return (
    <div className="todoListApp">
      <Toaster />
      <div className="forsta-logo" />
      <TodoList setShow={setShow} show={show}/>
    </div>
  );
}
