import { useMemo } from "react";
import "./CatergoryFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Chip from "../Chip/Chip";
import { getIcon } from "../../utils/utils";
import { TodoType } from "../../models/todo";
import { filterByCategory } from "../../redux/todo/todosSlice";

function CatergoryFilter() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    todos.forEach((todo: TodoType) => {
      categoryCounts[todo.category] = (categoryCounts[todo.category] || 0) + 1;
    });
    return Object.entries(categoryCounts).map(([title, count]) => ({
      title,
      count,
    }));
  }, [todos]);

  const filter = (category: string) => {
    dispatch(filterByCategory(category));
  };

  return (
    <div className="category-filter-section">
      {categories.map((category) => (
        <Chip
          icon={getIcon(category.title)}
          title={`${category.title}(${category.count})`}
          onClick={() => filter(category.title)}
        />
      ))}
    </div>
  );
}

export default CatergoryFilter;
