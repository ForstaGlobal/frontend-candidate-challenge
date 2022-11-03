import React, { useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

type ToDoProps = {
    title: string;
    todos: any[];
    onUpdate: (e: any, id: number) => void;
    onChange: (id: number, newName: string) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};


export const ToDoList = ({ title, todos, onUpdate, onChange, onEdit, onDelete }: ToDoProps) => {
    const [newTaskName, setNewTaskName] = useState('')

    const handleChangeTaskName = (e: { target: { value: React.SetStateAction<any>; }; }) => {
        setNewTaskName(e.target.value)
    }

    const handleOnEdit = (task: any) => {
        setNewTaskName(task.name)
        onEdit(task.id)
    }

    return (
        <div>
            <h2>{title}</h2>
            <ul className="todoList">
                {todos.length > 0 && todos.slice(0).reverse().map((item: any, i: any) => (
                    <li key={i}>
                        <div style={{ display: "flex" }}>
                            <input data-testid={`done-todo${i}`} className='done-input' name={`todo${i}`} id={`todo${i}`} type={"checkbox"} checked={item.done} onChange={(e) => onUpdate(e, item.id)} />
                            {item?.editable ? <input data-testid={`edit-todo${i}`} value={newTaskName} onChange={(e) => handleChangeTaskName(e)} /> : <p data-testid={`todo${i}`}>{item?.name}</p>}
                        </div>
                        <div>
                            {!item.editable ?
                                <button onClick={() => handleOnEdit(item)}><EditIcon /></button>
                                :
                                <button onClick={() => onChange(item.id, newTaskName)}><DoneIcon /></button>
                            }
                                <button name={`delete-todo${i}`} data-testid={`delete-todo${i}`} onClick={() => onDelete(item.id)}><DeleteIcon /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList