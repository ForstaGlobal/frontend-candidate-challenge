import React, { useCallback, useMemo } from "react";
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
  const filterCategory = useSelector(
    (state: RootState) => state.todo.filterCategory
  );

  const dispatch = useDispatch();

  const categories = useMemo(() => {
    const filteredTodos = todos.filter(
      (todo) =>
        todo.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
        (todo.task?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.category?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    console.log(filterCategory.toLowerCase(), filteredTodos);
    const categoryCounts: Record<string, number> = { ALL: todos.length };
    filteredTodos.forEach((todo: TodoType) => {
      categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1;
    });
    return Object.entries(categoryCounts).map(([title, count]) => ({
      title,
      count,
    }));
  }, [todos, searchQuery, filterCategory]);

  const filter = useCallback(
    (category: string) => {
      dispatch(filterByCategory(category));
    },
    [dispatch]
  );

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
