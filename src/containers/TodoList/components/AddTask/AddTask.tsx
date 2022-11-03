import React, { useState } from 'react'
import "./AddTask.scss"

type AddTaskProps = {
  todos: any[];
  onAdd: (nameTask: string) => void;
};

export const AddTask = ({ todos, onAdd }: AddTaskProps) => {
  const [nameTask, setNameTask] = useState("");

  const handleChangeName = (e: { target: { value: React.SetStateAction<any>; }; }) => {
    setNameTask(e.target.value)
  }

  const handleAddTask = () => {
    setNameTask("");
    onAdd(nameTask)
  }

  return (
    <div className="input-task">
      <input className="input" value={nameTask} onChange={handleChangeName} placeholder="Enter a task" />
      <button type='button' data-testid='add' className="add-button" onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default AddTask