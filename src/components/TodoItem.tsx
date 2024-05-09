import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  ITodoItem,
  deleteTodo,
  editTodo,
  toggleTodo,
} from '../features/todoApp/todoSlice';

export const TodoItem = ({ id, done, text }: ITodoItem) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  const dispatch = useAppDispatch();
  const handleInputBlur = () => {
    setIsEditing(false);
    dispatch(
      editTodo({
        id,
        done,
        text: todoText,
      })
    );
  };

  return (
    <div className="todoItem">
      <div>
        {isEditing ? (
          <input
            className="todoTextInput"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onBlur={handleInputBlur}
          />
        ) : (
          <>
            <input
              type="checkbox"
              checked={done}
              onChange={() => dispatch(toggleTodo(id))}
            />
            <span data-testid={`todo${id}`}>{text}</span>
          </>
        )}
      </div>
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </div>
  );
};
