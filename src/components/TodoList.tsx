import React from 'react';
import {TodoItem} from './TodoItem';
import {useSelector} from 'react-redux';
import {IAllStates} from '../models/IAllStates';

export const TodoList = () => {
  const tasks = useSelector((state: IAllStates) => state.todos);
  return (
      <ul className="todoList">
        {tasks?.map((item) => (
            <TodoItem key={item.id} todoItem={item}/>
        ))}
      </ul>
  );
};