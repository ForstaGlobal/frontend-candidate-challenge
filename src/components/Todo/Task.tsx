import React, { useState } from "react";

import "../../styles/main.scss";
import { Todo } from "../../types";

type TaskProps = {
  todo: Todo;
  onToggleComplete: (isComplete: boolean) => void;
};

export default function Task({ todo, onToggleComplete }: TaskProps) {
  const [isChecked, setChecked] = useState<boolean>(todo.isComplete);

  const toggleComplete = (value: boolean) => {
    setChecked(value);
    onToggleComplete(value);
  };

  return (
    <div className="todo-list-item-task">
      <input
        type="checkbox"
        name="isChecked"
        id="isChecked"
        checked={isChecked}
        onChange={(e) => toggleComplete(e.target.checked)}
      />
      <span className={todo.isComplete ? "mark-done" : ""}>{todo.task}</span>
    </div>
  );
}
