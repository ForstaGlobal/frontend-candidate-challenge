import React from "react";

export const TodoList = (props) => {
    function toggleDone(event, item) {
        props.onToggle(item);
    }

    function deleteIt(event, item) {
        props.onDelete(item);
    }

    return (
    <ul className="todoList">
      {props.todos.map((item) => (
        <li key={item.id}>
          <span
            data-testid={`todo${item.id}`}
            style={{ textDecoration: item.done ? 'line-through': 'none'}}
            onClick={ (event) => toggleDone(event, item) }
          >
            {item.text}
          </span>
          <span
            className="delBtn"
            onClick={ (event) => deleteIt(event, item) }
          >
            x
          </span>
        </li>
      ))}
    </ul>
  );
};
