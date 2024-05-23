import Button, { BUTTON_THEMES } from "./Button";
import content from "../content/app.json";
import { Todo } from "../context/TodoListProvider";

const {
  todo_list_content: { check, uncheck, edit, remove },
} = content;

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem = ({ todo, onEdit, deleteTodo, toggleTodo }: TodoItemProps) => {
  const { isDone, text, id } = todo;
  return (
    <>
      <span
        data-testid={`todo-${text}`}
        className={isDone ? "completedTodo" : ""}
      >
        {text}
      </span>
      <div className="buttonContainer">
        <Button
          theme={BUTTON_THEMES.PRIMARY}
          onClick={() => toggleTodo(id)}
          text={isDone ? uncheck : check}
          testId="todo-item-toggle-btn"
        />
        <Button
          theme={BUTTON_THEMES.SECONDARY}
          onClick={() => onEdit(todo)}
          text={edit}
          testId="todo-item-edit-btn"
        />
        <Button
          theme={BUTTON_THEMES.DANGER}
          onClick={() => deleteTodo(id)}
          text={remove}
          testId="todo-item-remove-btn"
        />
      </div>
    </>
  );
};

export default TodoItem;
