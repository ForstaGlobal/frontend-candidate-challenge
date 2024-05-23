import { TodoList } from "./components/TodoList";

import "./styles.scss";
import { TodoProvider } from "./context/TodoListProvider";
import TextBox from "./components/TextBox";

export default function App() {
  return (
    <TodoProvider>
      <div className="todoListApp">
        <div className="forsta-logo" />
        <TextBox />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
