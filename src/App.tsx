import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles/main.scss";
import { Todo } from "./types";
import { TodoForm } from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTask = (task: string) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), task, isComplete: false },
    ]);
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((item) => item.id != id));
  };

  const editTask = (id: string) => {
    // TODO: implement edit functionality
  };

  const toggleComplete = (id: string, value: boolean) => {
    setTodos(
      todos.map((item: Todo) =>
        item.id === id ? { ...item, isComplete: value } : item
      )
    );
  };

  return (
    <>
      <header>
        <div className="forsta-logo"></div>
      </header>
      <div className="intro">
        <h2>Hi there! Let's get something done.</h2>
        <p>
          <i>Organize your plans here.</i>
        </p>
      </div>
      <TodoForm onTaskFormSubmit={(task) => saveTask(task)} />
      <TodoList
        todos={todos}
        onDeleteTask={(id) => deleteTask(id)}
        onEditTask={(id) => editTask(id)}
        onToggleComplete={(id, value) => toggleComplete(id, value)}
      />
    </>
  );
}
