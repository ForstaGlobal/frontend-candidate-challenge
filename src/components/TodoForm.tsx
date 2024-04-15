import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClear } from "react-icons/md";

import "../styles/main.scss";

type TodoFormProps = {
  onTaskFormSubmit: (task: string) => void;
};
export const TodoForm = ({ onTaskFormSubmit }: TodoFormProps) => {
  const [task, setTask] = useState<string>("");

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;
    onTaskFormSubmit(task);
    setTask("");
  };

  return (
    <form className="todo-form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter what needs to be done"
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {task ? (
        <>
          <span className="todo-clear-button" onClick={() => setTask("")}>
            <MdClear size={24} />
          </span>
        </>
      ) : null}
      <button className="todo-submit-button" type="submit" disabled={!task}>
        <FaPlus color="#FFFFFF" />
        <span>Add task</span>
      </button>
    </form>
  );
};
