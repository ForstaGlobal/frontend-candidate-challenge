import "./TodoItem.scss" 
import { TodoType } from "../../models/todo";
import { useDispatch } from "react-redux";
import {
  selectTodo,
  showHidePopup,
  toggleTodo,
  removeTodo,
} from "../../redux/todo/todosSlice";
import {  Card, Dropdown } from "react-bootstrap";
import Chip from "../Chip/Chip";
import { getIcon } from "../../utils/utils";

interface TodoItemProps {
  todo: TodoType;
}
function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  const handleMarkAsComplete = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const handleEdit = (id: number) => {
    dispatch(showHidePopup());
    dispatch(selectTodo(id));
  };
  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };
  const getDecorationStyle = () => ({
    textDecoration: todo.completed ? "line-through" : "none",
  });

  return (
    <Card 
      key={todo.id}       
      className={`todo-card mb-3  ${todo.completed ? "completed" : ""}`}
      style={{ backgroundColor: todo.color, color: "white" }}
      aria-label={todo.completed ? `${todo.task} (completed)` : todo.task}
    >
      <Card.Body> 
        <Card.Title style={getDecorationStyle()}>
      {todo.completed && <i className="bi bi-check-circle-fill me-2"></i>} {todo.task}</Card.Title>
        <Card.Text style={getDecorationStyle()}> {todo.description}</Card.Text>
        <Chip  icon={getIcon(todo.category)} title= {todo.category} /> 
        <Dropdown className="float-end">
          <Dropdown.Toggle variant="" id="dropdown-basic" data-testid="Action"  className="action-btn">
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleEdit(todo.id)}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleDelete(todo.id)}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleMarkAsComplete(todo.id)} data-testid="MarkAsComplete">
              {todo.completed? "Mark as Incomplete": "Mark as Complete"}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
