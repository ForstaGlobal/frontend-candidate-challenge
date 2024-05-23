import React, { createContext, useState, useContext } from 'react';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// Define todos context
const TodosContext = createContext<{
  getTodos: () => Todo[];
  addNewTodoOnTop: (text: string) => void;
  updateText: (todoId: string, text: string) => void;
  completeTodo: (todoId: string, complete: boolean) => void;
  deleteTodo: (todoId: string) => void;
} | null>(null);

// Todos provider component
export const TodosProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "0", title: "Buy milk", completed: true },
    { id: "1", title: "Buy bread", completed: false },
  ]);

  const getTodos = () => todos;

  const addNewTodoOnTop = (text: string) => {
    const newId = Math.random() * 10 + "" + new Date().getTime();
    setTodos(prevTodos => ([{ id: newId, title: text, completed: false}, ...prevTodos]));
  }

  const updateText = (todoId: string, text: string) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === todoId ? { ...todo, title: text} : todo));
  }

  const completeTodo = (todoId: string, completed: boolean) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === todoId ? { ...todo, completed } : todo));
  }

  const deleteTodo = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  return <TodosContext.Provider value={{ 
    getTodos,
    addNewTodoOnTop,
    updateText, 
    completeTodo, 
    deleteTodo,
  }}>{children}</TodosContext.Provider>;
};

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodosContext must be used within a ToastProvider');
  }

  return context;
}
