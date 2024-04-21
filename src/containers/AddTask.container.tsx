import React, { useEffect, useState } from 'react';
import { CategoryType, SetStateType, TaskType } from 'types';
import { AddTask } from 'views/AddTask.view';
import Tooltip from '@mui/material/Tooltip';
import Circle from '@mui/icons-material/Circle';
import { persistTask } from 'api/helper';

export const AddTaskContainer: React.FC<{
  categories: CategoryType[];
  tasks: TaskType[];
  setTasks: SetStateType<TaskType>;
}> = ({ categories, tasks, setTasks }) => {
  const [value, setValue] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.label);

  useEffect(() => {
    setSelectedCategory(categories[0]?.label);
  }, [categories]);

  const onChange = (str: string) => {
    setValue(str);
  };

  const makeNewId = () => {
    return tasks.reduce((acc, task) => (task.id > acc ? task.id : acc + 1), 1);
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const meridian = hours < 12 ? 'am' : 'pm';
    return `${formattedHours}:${formattedMinutes} ${meridian}`;
  };

  getTime();

  const onKeyUp = (str: string) => {
    if (str === 'Enter') {
      const newTask: TaskType = {
        id: makeNewId(),
        category: selectedCategory,
        text: value,
        time: getTime(),
        done: false,
      };
      setTasks([...tasks, newTask]);
      setValue('');
      persistTask(newTask);
    } else if (str === 'Escape') {
      setValue('');
    }
  };

  const getClass = (category: CategoryType) => {
    let className = 'category-circle ' + category.color;
    if (category.label === selectedCategory) {
      className += ' active';
    }
    return className;
  };

  return (
    <AddTask value={value} onChange={onChange} onKeyUp={onKeyUp}>
      {categories.map((category) => (
        <Tooltip title={category.label} key={category.label}>
          <Circle
            fontSize="small"
            className={getClass(category)}
            onClick={() => setSelectedCategory(category.label)}
          />
        </Tooltip>
      ))}
    </AddTask>
  );
};
