import { useState } from "react";
import { Todo } from "../../types";
import "./style.scss";

type AddItemProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const AddItem = ({ todos, setTodos }: AddItemProps) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <form className="add-container" onSubmit={handleSubmit}>
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
        type="submit"
        className="add-container__btn"
        data-testid={`addbtn`}
      >
        Add
      </button>
    </form>
  );
};
