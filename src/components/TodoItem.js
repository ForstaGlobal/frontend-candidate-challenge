import React from "react";
import { useState } from "react";


// TodoItem.js

function TodoItem(props){
  const { todo, onEditClick, onDeleteClick } = props;
  const [complete, setComplete] = useState(false)

  function textClick() {
    setComplete(!complete)
  }

    return (
      <li key={todo?.id}>
        <div data-testid="todo-list-item" style={{ textDecoration: complete ? "line-through" : ""}}
        onClick={() => textClick()}
      >{todo?.text}</div>
        <button onClick={() => onEditClick(todo)}>Edit </button>
        <button onClick={() => onDeleteClick(todo?.id)}>Delete</button>
      </li>
    );
}

export default TodoItem
