import { useSelector } from "react-redux";
import "./TodoFooter.scss"
import { RootState } from "../../redux/store";
function TodoFooter() {
    const todos = useSelector((state: RootState) => state.todo.todos);    

    const numberOfIncompleteTasks = todos.filter(todo => !todo.completed).length;
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "todo" : "todos"} left</p>
            <p>{todos.length} {todos.length === 1 ? "task" : "tasks"} left</p>
        </div>
    )
}

export default TodoFooter
