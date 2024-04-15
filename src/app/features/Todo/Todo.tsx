import TodoList from "../../components/TodoList/TodoList";
import ProgressSection from "../../components/ProgressSection/ProgressSection";
import TodoPopUp from "../../components/TodoPopup/TodoPopUp";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import { useDispatch, useSelector } from "react-redux";
import { showHidePopup } from "../../redux/todo/todosSlice";
import { RootState } from "../../redux/store";
import "./Todo.scss";
import SearchTodo from "../../components/SearchTodo/SearchTodo";
import CatergoryFilter from "../../components/CatergoryFilter/CatergoryFilter";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleClick = () => {
    dispatch(showHidePopup());
  };
  return (
    <div className="todo">
      {todos.length > 0 ? (
        <>
          <ProgressSection />
          <SearchTodo />          
          <CatergoryFilter/>
          <TodoList />
        </>
      ) : (
        <div className="noTask">
          <p>You don't have any tasks yet</p>
          <p>Click on the + button to add one</p>
        </div>
      )}
      <TodoPopUp />
      <FloatingButton onClick={handleClick} />
    </div>
  );
}

export default Todo;
