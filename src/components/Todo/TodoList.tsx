import React, { useState } from "react";

import { Todo } from "../../types";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { FcTodoList } from "react-icons/fc";

import Task from "./Task";
import Modal from "../Modal";
import { TodoForm } from "./TodoForm";

type TodoListProps = {
  todos: Todo[];
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newTask: string) => void;
  onToggleComplete: (id: string, isComplete: boolean) => void;
};

export const TodoList = ({
  todos,
  onDeleteTask,
  onEditTask,
  onToggleComplete,
}: TodoListProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [taskInEditMode, setTaskInEditMode] = useState<Todo | undefined>(
    undefined
  );

  const [taskToDelete, setTaskToDelete] = useState<Todo | undefined>(undefined);

  const editTodo = (todo: Todo) => {
    setTaskInEditMode(todo);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setTaskInEditMode(undefined);
    setOpenEditModal(false);
  };

  const EditModal = () => (
    <Modal
      title="Edit task"
      isOpen={openEditModal}
      onClose={() => closeEditModal()}
    >
      <TodoForm
        todo={taskInEditMode}
        onTaskFormSubmit={(task, id) => {
          if (!id) {
            throw new Error("Nothing to edit");
          }
          onEditTask(id, task);
          closeEditModal();
        }}
      />
    </Modal>
  );

  const deleteTodo = (todo: Todo) => {
    setTaskToDelete(todo);
    setOpenDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setTaskToDelete(undefined);
    setOpenDeleteModal(false);
  };

  const deleteTask = (todo: Todo | undefined) => {
    if (!todo) {
      return;
    }
    onDeleteTask(todo.id);
    closeDeleteModal();
  };

  const DeleteModal = () => (
    <Modal
      title="Delete task"
      isOpen={openDeleteModal}
      onClose={() => closeDeleteModal()}
    >
      <div className="delete-modal">
        {taskToDelete ? (
          <>
            <p>Are you sure you want to delete this task?</p>

            <strong>{taskToDelete.task}</strong>

            <button onClick={() => deleteTask(taskToDelete)}>yes</button>
          </>
        ) : (
          "Nothing to delete"
        )}
      </div>
    </Modal>
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
                {!item.isComplete && (
                  <span
                    className="todo-list-item-edit"
                    onClick={() => editTodo(item)}
                  >
                    <CiEdit size={24} />
                  </span>
                )}
                <span
                  className="todo-list-item-delete"
                  onClick={() => deleteTodo(item)}
                >
                  <CiTrash size={24} />
                </span>
              </div>
            </li>
          ))
        ) : (
          <div className="no-tasks">
            <FcTodoList size={50} />
            <p>You have no tasks. Add one now!</p>
          </div>
        )}
      </ul>
      <EditModal />
      <DeleteModal />
    </>
  );
};
