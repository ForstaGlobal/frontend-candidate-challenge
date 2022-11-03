import React from "react";
import AddTask from "./components/AddTask/AddTask"
import ToDoList from "./components/ToDoList";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    addTask,
    updateTask,
    selectTodos,
} from './store/index';

import "./ToDoList.scss"

export const TodoList = () => {
    const todos = useAppSelector(selectTodos);
    const dispatch = useAppDispatch();
    const doneTasks = todos.filter((task: any) => { if (task.done) return task; return 0 })
    const notDoneTasks = todos.filter((task: any) => { if (!task.done) return task; return 0 })

    const handleAddTask = (nameTask: string) => {
        const newTask = [...todos, {
            id: todos.length + 1,
            name: nameTask,
            done: false,
            editable: false
        }]
        dispatch(addTask(newTask))
    }

    const handleDeleteTask = (id: number) => {
        const deleteTask = todos.filter((task: any) => {
            if (task.id !== id) {
                return task;
            }
            return 0;
        })
        dispatch(updateTask(deleteTask))
    }

    const handleUpdateTask = (e: { target: { checked: React.SetStateAction<any>; }; }, id: number) => {
        const editTask = todos.map((task: any) => {
            if (task.id === id) {
                return { ...task, done: e.target.checked }
            }
            return task;
        })
        dispatch(updateTask(editTask))
    }

    const handleEdit = (id: number) => {
        const editTask = todos.map((task: any) => {
            if (task.id === id) {
                return { ...task, editable: !task.editable }
            }
            return task;
        })
        dispatch(updateTask(editTask))
    }

    const handleChangeUpdate = (id: number, newName: string) => {
        const newTask = todos.map((task: any) => {
            if (task.id === id) {
                return { ...task, name: newName, editable: !task.editable }
            }
            return task
        })
        dispatch(updateTask(newTask))
    }

    return (
        <div>
            <AddTask onAdd={handleAddTask} todos={todos} />
            <ToDoList title="Not Done" todos={notDoneTasks} onUpdate={handleUpdateTask} onChange={handleChangeUpdate} onEdit={handleEdit} onDelete={handleDeleteTask} />
            <ToDoList title="Done" todos={doneTasks} onUpdate={handleUpdateTask} onChange={handleChangeUpdate} onEdit={handleEdit} onDelete={handleDeleteTask} />
        </div>
    );
};
