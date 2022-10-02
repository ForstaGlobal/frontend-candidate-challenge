import React from "react";


interface TodoListProps {
  todos: any[];
  handleEdit: Function;
  handleAdd: Function;
  handleDel: Function;
  handleDone: Function;
};
export const TodoList = (props: TodoListProps ) => {

  return (
    <ul>
      {props.todos.map((item, i) => (
        <li key={i} className="dark:bg-zinc-600 bg-zinc-100 dark:text-white font-bold my-3 mx-auto px-4 py-3 text-start rounded">
        <div className="w-[100%] md:flex md:flex-column" id={`todoelem${i}`} data-testid={`todoelem${i}`}>

        <div className="overflow-auto sm:inline-block md:p-3 md:m-3 m-auto md:min-w-[82px] md:w-[82px] w-[100%]">
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" onClick={() => props.handleDone(item)} id={`check-${i}`} data-testid={`check-${i}`} defaultChecked={item.done} className="sr-only peer"/>
            <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-200 dark:bg-zinc-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-500 dark:peer-checked:bg-zinc-800"></div>
          </label>
        </div>


          <div className="w-[100%] md:mr-3 dark:bg-zinc-600 rounded dark:text-white block my-3 px-3 py-3"><span className={item.done ? "line-through" : ""} data-testid={`todo${i}`} onClick={() => props.handleDone(item)} key={item.text} >{item.text}</span></div>
          <button className="md:min-w-[auto] min-w-[100%] rounded bg-green-700 text-white font-bold hover:bg-green-900 my-3 m-0 block px-5 py-3 mr-2" onClick={() => props.handleEdit(item)} data-testid={`edit-${i}`}>Edit</button>
          <button className="md:min-w-[auto] min-w-[100%] rounded bg-red-700 text-white font-bold hover:bg-red-900 my-3 m-0 block px-5 py-3" onClick={() => props.handleDel(item)} data-testid={`del-${i}`}>X</button>
        </div>

        </li>
      ))}
    </ul>
  );
};
