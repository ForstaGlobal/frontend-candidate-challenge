import React, { useState } from 'react';

import Task from './Task';
import TaskCreateForm from './TaskCreateForm';
import { Task as TaskModel } from '../models/task';

export const Tasks: React.FC = () => {

  // Our states, let's keep it simple
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const onCreated = (newTask: TaskModel): void => {
    setTasks([newTask, ...tasks]);
  }
  const onDeleted = (id: number): void => {
    setTasks(tasks.filter(t => t.id !== id));
  }
  const onUpdated = (id: number, updatedTask: TaskModel): void => {
    setTasks(tasks.map(t => ({ ...(t.id === id ? updatedTask : t) })));
  }
  const editingToggled = (id: number): void => {
    setTasks(tasks.map(t => ({ ...t, editing: t.id === id ? !t.editing : t.editing })));
  }
  const onStateToggled = (id: number): void => {
    // return new objects, immutability and all...
    let newTasks = tasks.map(t => ({ ...t, done: t.id === id ? !t.done : t.done }));
    newTasks.sort((t1, t2) => {
      if (t1.done == t2.done) {
        // sort by id (time created here)
        return t2.id - t1.id;
      }
      // sort by status
      return t1.done ? 1 : -1;
    });
    setTasks(newTasks);
  }

  return (<section className="tasks">
    <TaskCreateForm onFormSubmit={onCreated} />

    <div className={`tasks__list ${tasks.length === 0 ? 'tasks__list-empty' : ''}`}>
      {
        tasks.length < 1
          ? "Lucky you! There is nothing that requires your attention, you can relax and take a breather!"
          : <ul>
            {
              tasks.map((t) => (<Task
                key={t.id}
                task={t}
                stateToggled={onStateToggled}
                deleted={onDeleted}
                updated={onUpdated}
                editingToggled={editingToggled} />))
            }
          </ul>
      }
    </div>
  </section>)
}

export default Tasks;