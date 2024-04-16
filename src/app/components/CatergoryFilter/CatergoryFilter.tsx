import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { filterByCategory } from "../../redux/todo/todosSlice";
import { TodoType } from "../../models/todo";
import { getIcon } from "../../utils/utils";
import Chip from "../Chip/Chip";
import "./CatergoryFilter.scss";

const CategoryFilter: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const searchQuery = useSelector((state: RootState) => state.todo.searchQuery);
  const filterCategory = useSelector((state: RootState) => state.todo.filterCategory);

  const dispatch = useDispatch();

  const categories = useMemo(() => {
    debugger;
    const filteredTodos = searchQuery
      ? todos.filter(
          (todo) =>
            todo.task?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            todo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            todo.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : todos;
    const categoryCounts: Record<string, number> = {"ALL": todos.length};
    filteredTodos.forEach((todo: TodoType) => {
      categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1;
    });
    return Object.entries(categoryCounts).map(([title, count]) => ({
      title,
      count,
    }));
  }, [todos, searchQuery]);

  const filter = (category: string) => {
    dispatch(filterByCategory(category));
  };

  return (
    <div className="category-filter-section">
      {categories.map((category, index) => (
        <Chip
          key={index}
          icon={getIcon(category.title)}
          title={`${category.title} (${category.count})`}
          onClick={() => filter(category.title)}
          selected={filterCategory === category.title}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
