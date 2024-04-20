import { Todo } from "../../interfaces/types";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { FcTodoList } from "react-icons/fc";
import Task from "./Task";

type TodoListProps = {
  todos: Todo[];
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string) => void;
  onToggleComplete: (id: string, isDone: boolean) => void;
};
export const TodoList = ({
  todos,
  onDeleteTask,
  onEditTask,
  onToggleComplete,
}: TodoListProps) => {
  const EmptyListState = () => (
    <div className="no-tasks">
      <FcTodoList size={50} />
      <p>You have no tasks. Add one now!</p>
    </div>
  );

  const deleteTask = (todo: Todo) => {
    const res = window.confirm(`Are you sure you want to delete ${todo.task}`);
    if (!res) {
      return;
    }
    onDeleteTask(todo.id);
  };

  return (
    <ul className="todo-list-container">
      {todos.length ? (
        todos.map((item, i) => (
          <li key={i}>
            <Task
              todo={item}
              onToggleComplete={(isComplete) =>
                onToggleComplete(item.id, isComplete)
              }
            />
            <div className="todo-list-item-actions">
              {!item.isDone && (
                <span
                  className="todo-list-item-edit"
                  onClick={() => onEditTask(item.id)}
                >
                  <CiEdit size={24} />
                </span>
              )}
              <span
                className="todo-list-item-delete"
                onClick={() => deleteTask(item)}
              >
                <CiTrash size={24} />
              </span>
            </div>
          </li>
        ))
      ) : (
        <EmptyListState />
      )}
    </ul>
  );
};
