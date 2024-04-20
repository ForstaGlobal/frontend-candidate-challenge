import { Todo } from "../interfaces/types";

type TodoListProps = {
  todos: Todo[];
};
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <span data-testid={`todo${i}`}>{item.task}</span>
        </li>
      ))}
    </ul>
  );
};
