import { FormEvent, useRef, useState } from 'react';
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
  const saveButtonRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const handleEditTodo = (e: FormEvent) => {
    e.preventDefault();
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
      <div className={isEditing ? 'editTodo' : ''}>
        {isEditing ? (
          <form onSubmit={handleEditTodo}>
            <input
              className="todoTextInput"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              onBlur={() => saveButtonRef.current?.click()}
            />
            <button ref={saveButtonRef} type="submit">
              Save
            </button>
          </form>
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
      {isEditing ? null : (
        <div>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </div>
      )}
    </div>
  );
};
