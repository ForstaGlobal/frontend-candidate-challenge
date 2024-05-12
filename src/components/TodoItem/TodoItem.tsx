import { Todo } from "../../types";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import "./style.scss";

type TodoItemProps = {
  todo: Todo;
  handleSelect: (id: number) => void;
};

export const TodoItem = ({ todo, handleSelect }: TodoItemProps) => {
  const { id, text, isDone } = todo;

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
            {text}
          </span>
        </div>
        <div className="item-container__btn">
          <span className="item-container__btn__edit">
            <CiEdit size={"1.3em"} />
          </span>
          <span className="item-container__btn__submit">
            <IoMdCheckmark size={"1.3em"} />
          </span>
          <span className="item-container__btn__delete">
            <GoTrash size={"1em"} />
          </span>
        </div>
      </div>
    </li>
  );
};
