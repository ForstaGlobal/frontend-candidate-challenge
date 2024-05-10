import { Todo } from "../../types";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text } = todo;

  return (
    <li>
      <span data-testid={`todo${id}`}>{text}</span>
    </li>
  );
};
