import { TodoList } from "./components/TodoList/TodoList";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { ToastContainer } from "./components/Toasts/Toasts";

import { TodosProvider } from "./components/TodoList/TodosContext";
import { ToastProvider } from "./components/Toasts/ToastContext";

import "./styles.scss";

export default function App() {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <ToastProvider>
        <TodosProvider>
          <AddNewTodo />
          <TodoList />
        </TodosProvider>
        <ToastContainer />
      </ToastProvider>
    </div>
  );
}
