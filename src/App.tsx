import React, { useState } from "react";
import { TodoList } from "./components/TodoList";

import "./styles.scss";

export const App = () => {
  const [ taskstr, setNew ] = useState<string>("");
  const [ editid, editingID ] = useState<Object>();
  const [ editDone, toggleDone ] = useState<boolean>();
  const updateState = () => {
    setData(todos => {
      const newState = todos.map(item => {
        if (item === editid) {
          var task = Object({text: taskstr, done: editDone });
          return task;
        }
        return item;
      });
      return newState;
    });
  };

/*  const [todos, setData] = useState([
    { text: "Add Input Element", done: true },
    { text: "Add Add Button", done: false },
    { text: "Get a Coffee", done: true },
  ],
  );*/
  const [todos, setData] = useState<{ text: string, done: boolean }[]> ( [],);

  const updateTodos = (val: string, valState=false) => {
    setData(prevState => [...prevState, {text: val, done: valState}, ]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNew(e.target.value);
  }
  const handleEdit = (item: any) => {
    toggleEdit(1)
    var index = todos.indexOf(item);
    const id = todos.filter((item, i) => i == index )
    editingID(id[0])
    setNew(id[0].text);
    toggleDone(id[0].done);
  }
  const handleSave = () => {
    editingID("");
    setNew("");
    toggleEdit(0);
    updateState();
  }
  const handleAdd = (e: any) => {
    e.preventDefault();
    if (taskstr.length < 1) { return }
    setNew('');
    updateTodos(taskstr, editDone)
  }
  const handleDone = (item: any) => {
    var index = todos.indexOf(item);
    const id = todos.filter((e, i) => i == index );
    setData(todos => {
      const newState = todos.map(item => {
        if (item === id[0]) {
          var task = Object({text: id[0].text, done: !id[0].done });
          return task;
        }
        return item;
      });
      return newState;
    });
  }
  const handleDel = (item: any) => {
    editingID("")
    setNew("")
    toggleEdit(0)
    var index = todos.indexOf(item);
    setData(todos => {
        return todos.filter((item, i) => i !== index)
      })
  }
  return (
    <div id="theapp" className="todoListApp">
      <div className="sm:flex block">
        <div className="forsta-logo block sm:inline-block min-w-[240px]" />
        <div className="overflow-auto block sm:inline-block md:w-[100%] md:h-[74px] w-[100%] py-3">
          <label className="inline-flex md:float-right relative items-center cursor-pointer sm:float-right">
            <input type="checkbox" id="dark-toggle" className="sr-only peer" onChange={toggleDark}/>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
          </label>
        </div>
      </div>
      <div className="container w-100 md:max-w-[60%] max-w-auto m-auto dark:bg-zinc-800 bg-zinc-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl text-center">
      <span className="text-zinc-900 dark:text-white font-bold text-lg w-[100%] block text-start" >New Todo:</span>
        <div className="w-[100%] md:flex md:flex-column">
          <input type="text" value={taskstr} className="w-[100%] md:mr-3 dark:bg-zinc-600 rounded text-zinc-900 dark:text-white border-[1px] border-zinc-300 dark:border-zinc-500 block my-3 px-3 py-3" placeholder="New Todo" onChange={handleChange}/>
          <button id="addBtn" className="md:min-w-[auto] min-w-[100%] rounded bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-900 my-3 m-0 block px-5 py-3" onClick={handleAdd} >+</button>
          <button id="saveBtn" className="hidden md:min-w-[auto] min-w-[100%] rounded bg-blue-700 text-white font-bold hover:bg-blue-900 my-3 m-0 block px-5 py-3" onClick={handleSave} >Save</button>
        </div>
        <hr className="my-8 w-[60%] mx-auto dark:border-zinc-600 border-zinc-400" />
        <span className="text-zinc-900 dark:text-white font-bold text-lg w-[100%] block text-start" onClick={handleEdit}>Current Todos ({todos.length}):</span>
        <TodoList todos={todos} handleEdit={handleEdit} handleAdd={handleAdd} handleDel={handleDel} handleDone={handleDone}/>
      </div>
    </div>
  );
}
function toggleEdit(onoff=0) {
  const addBtn = document.getElementById("addBtn") as HTMLInputElement | null;
  const saveBtn = document.getElementById("saveBtn") as HTMLInputElement | null;
  if ( onoff == 1 ) {
      addBtn?.classList.add("hidden")
      saveBtn?.classList.remove("hidden")
  } else {
    addBtn?.classList.remove("hidden")
    saveBtn?.classList.add("hidden")
  }

}
function toggleDark() {
  const toggle = document.getElementById("dark-toggle") as HTMLInputElement | null;
  const theapp = document.getElementById("theapp") as HTMLElement | null;
  if (toggle != null ) {
    if (theapp?.classList.contains('dark')) {
      toggle.checked = false;
    } else {
      toggle.checked = true;
    }
    theapp?.classList.toggle("dark")
  }
}

export default App