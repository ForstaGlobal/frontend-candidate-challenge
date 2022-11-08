import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodos} from '../store/slices/todo.slice';

export const TodoForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const createTodo = () => {
            if (task === '') {
                alert('Input field is empty');
            } else {
                dispatch(addTodos({
                    id: Date.now(),
                    text: task,
                    done: false,
                }));
                setTask('');
            }
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value)
    }

    return (
        <div className="d-flex justify-content-between">
            <input type="text"
                   value={task}
                   placeholder="Type here ..."
                   onChange={handleChange}
                   className="w-100"
            />
            <button className="w-20" onClick={createTodo}>Add task</button>
        </div>
    );
}