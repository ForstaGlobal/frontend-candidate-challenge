import { BsCheck2Square, BsReverseBackspaceReverse, BsSave2, BsSquare } from 'react-icons/bs';
import React, { useState } from 'react';

import { IconContext } from 'react-icons';
import { Task as TaskModel } from '../models/task';

interface TaskComponentProps {
  task: TaskModel,
  stateToggled: (id: number) => void,
  deleted: (id: number) => void,
  updated: (id: number, task: TaskModel) => void,
  editingToggled: (id: number) => void
}

export const Task: React.FC<TaskComponentProps> = ({ task, stateToggled, deleted, updated, editingToggled }) => {

  const [taskDescription, setTaskDescription] = useState<string>(task.description);

  const onFormSubmit = (e: React.FormEvent): void => {
    updated(task.id, { ...task, description: taskDescription, editing: false });
    e.preventDefault();
  }

  return (
    <>
      {
        task.editing
          ? <form className="task__form" onSubmit={(e) => onFormSubmit(e)}>
            <input className="task__form_field" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} data-testid="edit_input" type="text" name="task" id="task" />
            <button className="task__form_btn pointer" data-testid="edit_submit" type="submit">
              <IconContext.Provider value={{ className: "icon icon-end color-green" }}>
                <BsSave2 />
              </IconContext.Provider>
            </button>
          </form>
          : <li className={`task ${task.done ? 'faded' : ''}`} key={task.id}>
            <div onClick={() => deleted(task.id)} className="flex pointer" data-testid="delete_action">
              <IconContext.Provider value={{ className: "icon color-red" }}>
                <BsReverseBackspaceReverse />
              </IconContext.Provider>
            </div>
            <div onClick={() => editingToggled(task.id)} className={`task__description ${task.done ? 'striked' : ''}`} data-testid="editing_toggler">{task.description}</div>
            <div onClick={() => stateToggled(task.id)} className={`flex pushed-right pointer`} data-testid="state_toggler">
              <IconContext.Provider value={{ className: `icon icon-end color-${task.done ? 'green' : 'grey'}` }}>
                {task.done ? <BsCheck2Square /> : <BsSquare />}
              </IconContext.Provider>
            </div>
          </li>
      }
    </>
  )
}

export default Task;