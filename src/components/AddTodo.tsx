import { useState } from 'react';
import { addTodo } from '../features/todoApp/todoSlice';
import { useAppDispatch } from '../app/hooks';

export const AddTodo = () => {
  const [todoText, setTodoText] = useState('');

  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div className="addTodo">
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};
