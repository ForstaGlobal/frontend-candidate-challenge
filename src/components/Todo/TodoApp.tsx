import { useState } from "react";

import { TodoList } from "./TodoList";

import { TodoForm } from "./TodoForm";
import { Todo } from "../../interfaces/types";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const saveTask = (task: string) => {
    setTodos([{ id: Math.random().toString(), task, isDone: false }, ...todos]);
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTask = (id: string, newTask: string) => {
    setTodos(
      todos.map((item: Todo) =>
        item.id === id ? { ...item, task: newTask } : item
      )
    );
  };

  const toggleComplete = (id: string, value: boolean) => {
    setTodos(
      todos.map((item: Todo) =>
        item.id === id ? { ...item, isDone: value } : item
      )
    );
  };

  return (
    <>
      <TodoForm onTaskFormSubmit={(task) => saveTask(task)} />
      <TodoList
        todos={todos}
        onDeleteTask={(id) => deleteTask(id)}
        onEditTask={(id, newTask) => editTask(id, newTask)}
        onToggleComplete={(id, value) => toggleComplete(id, value)}
      />
    </>
  );
}
