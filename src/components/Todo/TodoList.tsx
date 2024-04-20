import { Todo } from "../../interfaces/types";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { FcTodoList } from "react-icons/fc";
import Task from "./Task";
import { useState } from "react";
import Modal from "../Modal";
import { TodoForm } from "./TodoForm";

type ModalCtx = {
  mode: "EDIT" | "DELETE";
  title: string;
  todo: Todo;
};

type TodoListProps = {
  todos: Todo[];
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newTask: string) => void;
  onToggleComplete: (id: string, isDone: boolean) => void;
};
export const TodoList = ({
  todos,
  onDeleteTask,
  onEditTask,
  onToggleComplete,
}: TodoListProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalCtx, setModalCtx] = useState<ModalCtx>();

  const closeModal = () => {
    setModalCtx(undefined);
    setOpenModal(false);
  };

  const openDeleteConfirmation = (todo: Todo) => {
    setModalCtx({ mode: "DELETE", title: "Delete task", todo });
    setOpenModal(true);
  };

  const deleteTodo = (id: string) => {
    onDeleteTask(id);
    closeModal();
  };

  const openEditForm = (todo: Todo) => {
    setModalCtx({ mode: "EDIT", title: "Edit task", todo });
    setOpenModal(true);
  };

  const editTodo = (id: string, task: string) => {
    onEditTask(id, task);
    closeModal();
  };

  const EmptyListState = () => (
    <div className="no-tasks">
      <FcTodoList size={50} />
      <p>You have no tasks. Add one now!</p>
    </div>
  );

  const TaskModal = () => (
    <>
      {modalCtx && (
        <Modal
          title={modalCtx.title}
          isOpen={openModal}
          onClose={() => closeModal()}
        >
          {/* Delete mode */}
          {modalCtx.mode === "DELETE" && (
            <div className="delete-modal">
              <p>Are you sure you want to delete this task?</p>
              <strong>{modalCtx.todo.task}</strong>
              <button onClick={() => deleteTodo(modalCtx.todo.id)}>yes</button>
            </div>
          )}
          {/* edit mode */}
          {modalCtx.mode === "EDIT" && (
            <TodoForm
              todo={modalCtx.todo}
              onTaskFormSubmit={(task) => editTodo(modalCtx.todo.id, task)}
            />
          )}
        </Modal>
      )}
    </>
  );

  return (
    <>
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
                    onClick={() => openEditForm(item)}
                  >
                    <CiEdit size={24} />
                  </span>
                )}
                <span
                  className="todo-list-item-delete"
                  onClick={() => openDeleteConfirmation(item)}
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
      <TaskModal />
    </>
  );
};
