import "./Todo.scss"
import AddInput from '../../components/AddInput/AddInput'
import TodoList from '../../components/TodoList/TodoList'

function Todo() {
    return (
        <div className="todo">
            <AddInput />
            <TodoList />
        </div>
    )
}

export default Todo
