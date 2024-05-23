import { useTodos } from "../context/TodoListProvider";
import useTodoState from "../hooks/useTodoState";
import EditBox from "./EditBox";
import TodoItem from "./TodoItem";

export const TodoList = () => {
  const { todoList, deleteTodo, toggleTodo } = useTodos();
  const {
    onEdit,
    editingTodo,
    todo,
    handleOnChange,
    handleOnEditSubmit,
    onCancelEdit,
    errorMessage,
  } = useTodoState();

  const editBoxProps = {
    todo,
    handleOnChange,
    handleOnEditSubmit,
    onCancelEdit,
    errorMessage,
  };

  return (
    <ul className="todoList">
      {todoList.map((todo) => {
        const todoItemProps = {
          todo,
          onEdit,
          deleteTodo,
          toggleTodo,
        };

        return (
          <li key={todo.id}>
            {editingTodo?.id === todo.id ? (
              <EditBox {...editBoxProps} />
            ) : (
              <TodoItem {...todoItemProps} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
