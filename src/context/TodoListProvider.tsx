import { ReactNode } from "react";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

interface TodoContextType {
  todoList: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (todoId: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const DEFAULT_STATE = [
  { text: "Buy milk", isDone: true, id: uuidv4() },
  { text: "Buy bread", isDone: false, id: uuidv4() },
];

const _createTodo = (text: string): Todo => ({
  text,
  id: uuidv4(),
  isDone: false,
});

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>(DEFAULT_STATE);

  const addTodo = useCallback((text: string) => {
    const newTodo = _createTodo(text);

    setTodoList((prevState) => [newTodo, ...prevState]);
  }, []);

  const toggleTodo = useCallback((todoId: string) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((todoId: string) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  }, []);

  const editTodo = useCallback((todoId: string, newText: string) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
  }, []);

  const value = useMemo(
    () => ({
      todoList,
      addTodo,
      toggleTodo,
      editTodo,
      deleteTodo,
    }),
    [todoList, addTodo, toggleTodo, editTodo, deleteTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);

  if (context === undefined)
    throw new Error("useTodos must be used within a TodoProvider");

  return context;
};
