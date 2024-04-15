import Popup from "../Popup/Popup";
import "./TodoPopUp.scss";
import TodoForm from "../TodoForm/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { showHidePopup, selectTodo } from "../../redux/todo/todosSlice";

const TodoPopUp = () => {
  const showPopUp = useSelector((state: RootState) => state.todo.showPopup);
  const dispatch = useDispatch();

  const hidePopup = () => {
    dispatch(showHidePopup());
    dispatch(selectTodo(0));
  };

  return (
    <div>
      <Popup isOpen={showPopUp} onClose={hidePopup}>
        <TodoForm hidePopup={hidePopup} />
      </Popup>
    </div>
  );
};

export default TodoPopUp;
