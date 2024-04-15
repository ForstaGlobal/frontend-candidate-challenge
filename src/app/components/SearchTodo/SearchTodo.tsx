import { useCallback, useMemo, useState } from "react";
import "./SearchTodo.scss";
import { useDispatch } from "react-redux";
import { searchTodo } from "../../redux/todo/todosSlice";
import { debounce } from "lodash";

function SearchTodo() {
  const [todo, setSearchTest] = useState("");

  const dispatch = useDispatch();

  const debouncedSetInputValue = useMemo(
    () =>
      debounce((newInputValue: string) => {
        dispatch(searchTodo(newInputValue));
      }, 400),
    [dispatch]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const str = e.target.value;
      setSearchTest(str);
      debouncedSetInputValue(str);
    },
    [debouncedSetInputValue]
  );

  return (
    <div className="section">
      <input
        className="input"
        value={todo}
        onChange={handleOnChange}
        placeholder="Search todo..."
      />
    </div>
  );
}

export default SearchTodo;
