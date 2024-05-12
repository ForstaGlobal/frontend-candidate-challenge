import { Todo } from "../../types";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
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

  const handleClickEdit = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
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
            <span
              data-testid={`todo-submitbtn-${id}`}
              className="item-container__btn__submit"
              onClick={handleSubmit}
            >
              <IoMdCheckmark size={"1.3em"} />
            </span>
          ) : (
            <span
              data-testid={`todo-editbtn-${id}`}
              className="item-container__btn__edit"
              onClick={handleClickEdit}
            >
              <CiEdit size={"1.3em"} />
            </span>
          )}
          <span
            data-testid={`todo-delete-${id}`}
            className="item-container__btn__delete"
            onClick={(e) => {
              handleDelete(id);
            }}
          >
            <GoTrash size={"1em"} />
          </span>
        </div>
      </div>
    </li>
  );
};
