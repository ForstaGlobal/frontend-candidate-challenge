import { useState } from "react";
import { Todo } from "../../types";
import "./style.scss";

type AddItemProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const AddItem = ({ todos, setTodos }: AddItemProps) => {
  const [value, setValue] = useState("");
  const handleAdd = () => {
    if (value.trim() !== "") {
      const id: number = Math.ceil(Math.random() * 10000000);
      const todosCopy = [...todos];
      todosCopy.unshift({
        id,
        text: value,
        isDone: false,
      });
      setTodos(todosCopy);
      setValue("");
    }
  };

  return (
    <div className="add-container">
      <input
        className="input"
        data-testid={`input`}
        placeholder="Add New Task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="add-container__btn"
        data-testid={`addbtn`}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
