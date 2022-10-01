import { BsCheck2Square, BsReverseBackspaceReverse, BsSave2, BsSquare } from 'react-icons/bs';
import React, { useState } from 'react';

import { IconContext } from 'react-icons'

interface Task {
  id: number,
  description: string,
  done: boolean,
}

const App: React.FC = () => {

  // Our states, let's keep it simple
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>("");

  // Whenever we add a new task, save it
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setTasks([{
      id: Date.now(),
      description: taskDescription,
      done: false
    }, ...tasks]);
    setTaskDescription("");
  }

  const onDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const onToggleTaskState = (id: number): void => {
    // return new objects, immutability and all...
    let newTasks = tasks.map(t => ({ ...t, done: t.id === id ? !t.done : t.done }));
    newTasks.sort((t1, t2) => {
      if (t1.done === t2.done) {
        // sort by id (time created here)
        return t2.id - t1.id;
      }
      // sort by status
      return t1.done ? 1 : -1;
    });
    setTasks(newTasks);
  }


  return (
    <div className="App">
      <header style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <figure className='forsta-logo'></figure>
        <h1 className='uppercase'>Task tracker</h1>
      </header>

      <section className="tasks">
        <form className="tasks__form" onSubmit={(e) => onSubmit(e)}>
          <input className="tasks__form_field" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} type="text" name="task" id="task" />
          <button className="tasks__form_btn pointer" type="submit"><BsSave2 /></button>
        </form>

        <section className={`tasks__list ${tasks.length === 0 ? 'empty' : ''}`}>
          {
            tasks.length < 1
              ? "Lucky you! There is nothing that requires your attention, you can relax and take a breather!"
              : <ul>
                {
                  tasks.map((t) => (
                    <li className={`task ${t.done ? 'faded' : ''}`} key={t.id}>
                      <div className="pointer icon color-red" onClick={() => onDelete(t.id)}><BsReverseBackspaceReverse /></div>
                      <div className={`task__description ${t.done ? 'striked' : ''}`} >{t.description}</div>
                      <div className="pushed-right pointer" onClick={() => onToggleTaskState(t.id)}>
                        <IconContext.Provider value={{ className: `icon icon-end color-${t.done ? 'green' : 'grey'}` }}>
                          {
                            t.done
                              ? <BsCheck2Square />
                              : <BsSquare />
                          }
                        </IconContext.Provider>
                      </div>
                    </li>
                  ))
                }
              </ul>
          }
        </section>
      </section>
    </div>
  );
}

export default App;