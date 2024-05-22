import "./styles.scss";
import { TodosProvider } from "./components/TodoList/TodosContext";

export default function App() {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodosProvider>

      </TodosProvider>
    </div>
  );
}
