import "./styles.scss";
import { TodosProvider } from "./components/TodoList/TodosContext";
import { TodoList } from "./components/TodoList/TodoList";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";

export default function App() {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodosProvider>
        <AddNewTodo />
        <TodoList />
      </TodosProvider>
    </div>
  );
}
