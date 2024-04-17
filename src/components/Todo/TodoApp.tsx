import React, { useState } from "react";

import { TodoList } from "./TodoList";

import { Todo } from "../../types";
import { TodoForm } from "./TodoForm";

export default function TodoApp() {
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
