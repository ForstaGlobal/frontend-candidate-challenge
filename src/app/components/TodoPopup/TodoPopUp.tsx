import Popup from "../Popup/Popup";
import TodoForm from "../TodoForm/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { showHidePopup, selectTodo } from "../../redux/todo/todosSlice";
import { useCallback } from "react";
const TodoPopUp: React.FC = () => { 
  const showPopUp = useSelector((state: RootState) => state.todo.showPopup);
  const dispatch = useDispatch();

  const hidePopup = useCallback(() => {
    dispatch(showHidePopup());
    dispatch(selectTodo(0));
  }, [dispatch]);

  return (
    <div>
      <Popup isOpen={showPopUp} onClose={hidePopup}>
        <TodoForm hidePopup={hidePopup} />
      </Popup>
    </div>
  );
};

export default TodoPopUp;
