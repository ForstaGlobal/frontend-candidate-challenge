import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useMemo } from "react";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const searchQuery = useSelector((state: RootState) => state.todo.searchQuery);
  const filterCategory = useSelector(
    (state: RootState) => state.todo.filterCategory
  );

  const filteredTodos = useMemo(() => {
    return todos.filter(
      (todo) =>
        todo.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
        (todo.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [todos, filterCategory, searchQuery]);

  return (
    <div className="todolist-container">
      {filteredTodos.length === 0 ? (
        <p>No todo items found</p>
      ) : (
        <ul className="todos-container">
          {filteredTodos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
