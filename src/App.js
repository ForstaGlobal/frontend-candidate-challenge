import React, { useState } from "react";

import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", done: true },
    { id: 2, text: "Buy bread", done: false },
  ]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { ...todo,
        id: todos.length > 0 ? Math.max(...todos.map(val => val.id)) + 1 : 1 }
    ])
  }

  function toggleTodo(todo) {
    const newTodos = [...todos].map(i => i.id === todo.id ? {...i, done: !i.done } : {...i});
    setTodos(newTodos);
  }

  function deleteTodo(todo) {
    setTodos(prevTodos => prevTodos.filter(task => task.id !== todo.id))
  }

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
        <TodoForm todos={todos} onAdd={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
