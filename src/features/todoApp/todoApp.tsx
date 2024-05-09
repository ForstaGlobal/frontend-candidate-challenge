import { useAppSelector } from "../../app/hooks";
import { AddTodo } from "../../components/AddTodo";
import { NoContentText } from "../../components/NoContentText";
import { TodoList } from "../../components/TodoList";

export default function TodoApp() {

	const todos = useAppSelector(state => state.todo.todos);

  return (
    <div className="todoAppContainer">
			<AddTodo />
			{
				todos.length ? 
				<TodoList /> :
				<NoContentText />
			}
      
    </div>
  );
}
