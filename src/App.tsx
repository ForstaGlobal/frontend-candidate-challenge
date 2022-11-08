import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import "./styles.scss";
import {TodoForm} from './components/TodoForm';

export default function App() {

  return (
      <div className="todoListApp">
          <div className="forsta-logo"/>
          <TodoForm/>
          <TodoList/>
      </div>
  );
}
