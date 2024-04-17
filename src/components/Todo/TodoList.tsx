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
  const [openModal, setOpenModal] = useState(false);

  const [taskInEditMode, setTaskInEditMode] = useState<Todo | undefined>(
    undefined
  );

  const deleteTask = (todo: Todo) => {
    const res = window.confirm(`Are you sure you want to delete ${todo.task}`);
    if (!res) {
      return;
    }
    onDeleteTask(todo.id);
  };

  const openEditModal = (todo: Todo) => {
    setTaskInEditMode(todo);
    setOpenModal(true);
  };

  const closeEditModal = () => {
    setTaskInEditMode(undefined);
    setOpenModal(false);
  };

  const EditModal = () => (
    <Modal isOpen={openModal} onClose={() => closeEditModal()}>
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
                    onClick={() => openEditModal(item)}
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
          <div className="no-tasks">
            <FcTodoList size={50} />
            <p>You have no tasks. Add one now!</p>
          </div>
        )}
      </ul>
      <EditModal />
    </>
  );
};
