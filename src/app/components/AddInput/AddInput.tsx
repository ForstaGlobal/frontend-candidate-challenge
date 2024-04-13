import React, { useState } from "react";
import "./AddInput.scss";
import { generateUniqueId } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/todosSlice";

function AddInput() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const save = () => {
    if (!todo) return;
    const todoObj = {
      id: generateUniqueId(),
      task: todo,
      completed: false,
    };
    if (todo.trim() === "") return;
    dispatch(addTodo(todoObj));
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={save}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
