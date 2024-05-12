import { Todo } from "../../types";
import { GoTrash, GoCheck, GoPencil } from "react-icons/go";
import "./style.scss";
import { useState } from "react";

type TodoItemProps = {
  todo: Todo;
  handleSelect: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, value: string) => void;
};

export const TodoItem = ({
  todo,
  handleSelect,
  handleDelete,
  handleEdit,
}: TodoItemProps) => {
  const { id, text, isDone } = todo;
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text);

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = () => {
    handleEdit(id, value);
    setIsEdit(false);
  };

  return (
    <li>
      <div className="item-container">
        <div className="item-container__input">
          <input
            data-testid={`todo-input-${id}`}
            type="checkbox"
            className="item-container__input__checkbox"
            checked={isDone}
            onChange={() => {
              handleSelect(id);
            }}
          />
          <span
            data-testid={`todo-text-${id}`}
            className={isDone ? "checked" : ""}
          >
            {isEdit ? (
              <input
                data-testid={`todo-edit-${id}`}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            ) : (
              text
            )}
          </span>
        </div>
        <div className="item-container__btn">
          {isEdit ? (
            <button
              data-testid={`todo-submitbtn-${id}`}
              className="item-container__btn__submit"
              onClick={handleSubmit}
            >
              <GoCheck size={"1.3em"} />
            </button>
          ) : (
            <button
              data-testid={`todo-editbtn-${id}`}
              className="item-container__btn__edit"
              onClick={handleClickEdit}
            >
              <GoPencil size={"1.3em"} />
            </button>
          )}
          <button
            data-testid={`todo-delete-${id}`}
            className="item-container__btn__delete"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <GoTrash size={"1.3em"} />
          </button>
        </div>
      </div>
    </li>
  );
};
