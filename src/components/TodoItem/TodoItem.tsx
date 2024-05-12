import { Todo } from "../../types";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import "./style.scss";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text } = todo;

  return (
    <li>
      <span data-testid={`todo${id}`} className="item-container">
        <div className="item-container__input">
          <input type="checkbox" className="item-container__input__checkbox" />
          {text}
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
      </span>
    </li>
  );
};
