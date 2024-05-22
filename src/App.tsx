import "./styles.scss";
import { TodosProvider } from "./components/TodoList/TodosContext";
import { TodoList } from "./components/TodoList/TodoList";

export default function App() {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  );
}
