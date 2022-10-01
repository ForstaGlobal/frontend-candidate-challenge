import React, { useState } from 'react';

import { Task } from '../models/task';

export const TaskCreateForm: React.FC<{ onFormSubmit: (task: Task) => void }> = ({ onFormSubmit }) => {

  const [taskDescription, setTaskDescription] = useState<string>("");
  // Whenever we add a new task, save it
  const onSubmit = (e: React.FormEvent): void => {
    // Prevent form submission
    e.preventDefault();

    // No need to do anything if no description provided
    if (!taskDescription) { return; }

    const newTask = {
      id: Date.now(),
      description: taskDescription,
      done: false,
      editing: false
    };
    setTaskDescription("");
    onFormSubmit(newTask);
  }

  return (
    <form className="tasks__form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="tasks__form_field"
        value={taskDescription}
        placeholder="Something you'd like to plan?"
        onChange={(e) => setTaskDescription(e.target.value)}
        type="text"
        name="task"
        id="task"
      />
      <button className="tasks__form_btn pointer uppercase" type="submit">create</button>
    </form>
  )
}

export default TaskCreateForm;