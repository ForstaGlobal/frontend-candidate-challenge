import React, {useState} from 'react';
import {ITask} from '../models/ITask';
import {useDispatch} from 'react-redux';
import {completeTodos, removeTodos, updateTodos} from '../store/slices/todo.slice';

interface TodoItemProps {
    todoItem: ITask
};

export const TodoItem = ({todoItem}: TodoItemProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState<ITask>(todoItem);
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(removeTodos(todoItem.id))
    };

    const completeTask = () => {
        dispatch(completeTodos(todoItem.id))
    };

    const updateTask = () => {
        dispatch(updateTodos(task));
        setIsEdit(false);
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTask({
            ...task, [event.target.name]: event.target.value
        })
    };

    return (
        isEdit ?
            <li>
                <div className="d-flex w-100">
                    <input type="text"
                           value={task.text}
                           name="text"
                           onChange={handleChange}
                           className="w-100"
                           data-testid="edit-input"
                    />
                    <button className="w-20" onClick={updateTask}>Save</button>
                    <button className="w-20" onClick={() => setIsEdit(false)}>Cancel</button>
                </div>
            </li>
            :
            <li className={`${todoItem.done ? 'done' : ''}`}>
                <span data-testid={`todo${todoItem.id}`}>{todoItem.text}</span>
                <span>
                    <img onClick={deleteTask}
                         src="/icons/trash-solid.svg"
                         data-testid="delete-img"
                         alt="delete-icon"/>
                    <img onClick={() => setIsEdit(true)}
                         src="/icons/pen-to-square-regular.svg"
                         data-testid="edit-img"
                         alt="edit-icon"/>
                    <input defaultChecked={todoItem.done} onClick={completeTask} type="checkbox"/>
                </span>
            </li>
    );
}