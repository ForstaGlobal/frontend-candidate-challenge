import React, { useEffect, useState, KeyboardEvent } from "react";
import { TodoList } from "./components/TodoList";

import "./styles.scss";

export const App = () => {

  const [ taskstr, setNew ] = useState<string>("");
  const [ editid, editingID ] = useState<Object>();
  const [ editDone, toggleDone ] = useState<boolean>();
  const [ firstrun = true, firstRuntoggle ] = useState<boolean>();
  const [ filterTodos, ftodos ] = useState<number>(0);

  const [todos, setData] = useState<{ text: string, done: boolean }[]>( [],);
  const [ filtered, setFilter ] = useState<any>();
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
  useEffect(() => {
    updateToggles(filtered);
  }, [filtered]);
  useEffect(() => {
    filterIt(filterTodos);
  }, [todos]);

  const changeFilter = (i: number ) => {
    ftodos(i);
    filterIt(i)
  }
  const filterIt = (i: number) => {
    console.log(i);
    if (i == 0) {
      setFilter([...todos])
    } else if (i == 1) {
      setFilter(todos.filter(item => item.done == true));
    } else if (i == 2) {
      setFilter(todos.filter(item => item.done == false));
    }
  }
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
    toggleDone(false)
    updateState();
  }
  const handleAdd = (e: any) => {
    e.preventDefault();
    if (taskstr.length < 1) { return }
    setNew('');
    updateTodos(taskstr, editDone)
  }
  const [initial] = useState([
    { text: "Fix Dependencies Versions", done: true },
    { text: "Add Tailwind CSS", done: true },
    { text: "Add All Elements", done: true },
    { text: "Create Required Functions", done: true },
    { text: "Create All Tests", done: true },
    { text: "Fix All Types", done: false },
    { text: "Commit All Changes and request Pull", done: true },
  ],
  );
  if (firstrun) {
    firstRuntoggle(false);
    setData([...initial]);
    setFilter([...initial]);
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if ( editid == "" ) {
        handleAdd(e);
      } else {
        handleSave();
      }
    }
 };
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
  const handleCancel = () => {
    editingID("")
    setNew("")
    toggleEdit(0)
    toggleDone(false)
  }
  const handleDel = (item: any) => {
    editingID("")
    setNew("")
    toggleEdit(0)
    toggleDone(false)
    var index = todos.indexOf(item);
    const newState = setData(todos => {
      return todos.filter((item, i) => i !== index)
    })
  }
  return (
    <div id="theapp" className="todoListApp">
      <div className="sm:flex block">
        <div className="forsta-logo block sm:inline-block min-w-[240px]" data-testid="logo" />
        <div className="overflow-auto block sm:inline-block md:w-[100%] md:h-[74px] w-[100%] py-3">
          <label className="inline-flex md:float-right relative items-center cursor-pointer sm:float-right">
            <input type="checkbox" id="dark-toggle" className="sr-only peer" data-testid="dark-toggle" onChange={toggleDark}/>
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Dark Mode</span>
          </label>
        </div>
      </div>
      <div className="container w-100 md:max-w-[60%] max-w-auto m-auto dark:bg-zinc-800 bg-zinc-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl text-center">
      <span className="text-zinc-900 dark:text-white font-bold text-lg w-[100%] block text-start" >New Todo:</span>
        <div className="w-[100%] md:flex md:flex-column">
          <input type="text" data-testid="newtodoinput" onKeyDown={handleKeyPress} id="newtodo" value={taskstr} className="w-[100%] md:mr-3 dark:bg-zinc-600 rounded text-zinc-900 dark:text-white border-[1px] border-zinc-300 dark:border-zinc-500 block my-3 px-3 py-3" placeholder="New Todo" onChange={handleChange}/>
          <button id="addBtn" className="md:min-w-[auto] min-w-[100%] rounded bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-900 my-3 m-0 block px-5 py-3" onClick={handleAdd} >+</button>
          <button id="saveBtn" className="hidden md:min-w-[auto] min-w-[100%] rounded bg-blue-700 text-white font-bold hover:bg-blue-900 my-3 m-0 block px-5 py-3 mr-2" onClick={handleSave} >Save</button>
          <button id="cancelBtn" className="hidden md:min-w-[auto] min-w-[100%] rounded bg-orange-700 text-white font-bold hover:bg-orange-900 my-3 m-0 block px-5 py-3" onClick={handleCancel} >Cancel</button>
        </div>
        <hr className="my-8 w-[60%] mx-auto dark:border-zinc-600 border-zinc-400" />
        <div className="md:flex text-left md:text-center">
          <span className="md:w-[50%] w-[100%] text-zinc-900 dark:text-white font-bold text-lg w-[100%] text-start my-auto" data-testid="todostitle" onClick={handleEdit}>Total ToDo{todos.length!=1 ? "'s" : ""} ({todos.length}):</span>
          <div className="md:w-[50%] w-[100%] md:text-right mt-8 dark:text-white"><label>Filter by status: </label>
            <button id="FilterAll" className={`${ filterTodos != 0? "bg-zinc-400" : "bg-amber-500"} md:min-w-[auto] min-w-[100%] rounded-t md:rounded-l md:rounded-tr-none text-white font-bold hover:bg-amber-700 mt-3 m-0 px-2 py-2 mr-0`} onClick={() => changeFilter(0)}>All</button>
            <button id="FilterAll" className={`${ filterTodos != 1? "bg-zinc-400" : "bg-amber-500"} md:min-w-[auto] min-w-[100%] text-white font-bold hover:bg-amber-700 m-0 px-2 py-2 mr-0`} onClick={() => changeFilter(1)}>Done</button>
            <button id="FilterAll" className={`${ filterTodos != 2? "bg-zinc-400" : "bg-amber-500"} md:min-w-[auto] min-w-[100%] rounded-b md:rounded-r md:rounded-bl-none text-white font-bold hover:bg-amber-700 mb-3 m-0 px-2 py-2 mr-0`} onClick={() => changeFilter(2)}>Pending</button>
          </div>
        </div>
        <TodoList todos={filtered} handleEdit={handleEdit} handleAdd={handleAdd} handleDel={handleDel} handleDone={handleDone}/>
      </div>
    </div>
  );
}
function toggleEdit(onoff=0) {
  const addBtn = document.getElementById("addBtn") as HTMLInputElement | null;
  const saveBtn = document.getElementById("saveBtn") as HTMLInputElement | null;
  const cancelBtn = document.getElementById("cancelBtn") as HTMLInputElement | null;
  if ( onoff == 1 ) {
      addBtn?.classList.add("hidden")
      saveBtn?.classList.remove("hidden")
      cancelBtn?.classList.remove("hidden")
  } else {
    addBtn?.classList.remove("hidden")
    saveBtn?.classList.add("hidden")
    cancelBtn?.classList.add("hidden")
  }
}
function updateToggles(items: any[]) {
  items.forEach( (item: any, i: number) => {
    const toggle = document.getElementById('check-'+i) as HTMLInputElement | null;
    if (toggle != null ) {
      if (item.done == false) {
        toggle.checked = false
      } else {
        toggle.checked = true
      }
    }
  })
  const input = document.getElementById('newtodo') as HTMLInputElement | null;
  if (input != null) {
    input.focus();
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