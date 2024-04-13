import "./TodoList.scss"
import TodoFooter from '../TodoFooter/TodoFooter';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleTodo } from '../../redux/todo/todosSlice';

function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.todos);

    const dispatch = useDispatch();
  
    const updateTodo = (id: number) => {
      dispatch(toggleTodo(id));
    };

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index) => (
                            <div 
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                onClick={() => updateTodo(todo.id)}
                            >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
