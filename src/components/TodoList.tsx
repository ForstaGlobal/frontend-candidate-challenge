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
        <div className="w-[100%] md:flex md:flex-column">
          <input type="checkbox" className="m-3 p-4" onChange={() => props.handleDone(item)}/>
          <span data-testid={`todo${i}`} onChange={() => props.handleEdit(this)} key={item.text} className="w-[100%] md:mr-3 dark:bg-zinc-600 rounded dark:text-white block my-3 px-3 py-3">{item.text}</span>
          <input type="hidden" className="w-[100%] md:mr-3 dark:bg-zinc-600 rounded dark:text-white border-[1px] block my-3 px-3 py-3 leading-8" placeholder="{item.text}" value={item.text} />
          <button className="md:min-w-[auto] min-w-[100%] rounded bg-green-700 text-white font-bold hover:bg-green-900 my-3 m-0 block px-5 py-3 mr-2" onClick={() => props.handleEdit(item)}>Edit</button>
          <button className="md:min-w-[auto] min-w-[100%] rounded bg-red-700 text-white font-bold hover:bg-red-900 my-3 m-0 block px-5 py-3" onClick={() => props.handleDel(item)}>X</button>
        </div>

        </li>
      ))}
    </ul>
  );
};
