import { useState, FormEvent } from 'react';
import { addTodo } from '../features/todoApp/todoSlice';
import { useAppDispatch } from '../app/hooks';

export const AddTodo = () => {
  const [todoText, setTodoText] = useState('');

  const dispatch = useAppDispatch();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div className="addTodo">
      <form onSubmit={handleAddTodo}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter new todo here"
          name="todoText"
          data-testid="new-todo-input"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
