import { debounce } from "../../utils/debounce";
import { ListItem } from "../ListItem/ListItem";
import { useTodosContext } from "../TodoList/TodosContext";

import styles from "./TodoList.module.scss";

const debouncedUpdateText = debounce((cb: () => void) => cb(), 1500);

export const TodoList = () => {
  const { getTodos, deleteTodo, completeTodo, updateText } = useTodosContext();
  const todos = getTodos();

  const onUpdate = (id: string, value: string) => {
    debouncedUpdateText(() => {
      updateText(id, value);
    });
  }

  const onDelete = (id: string) => {
    setTimeout(() => {
      deleteTodo(id);
    }, 410);
  }

  return (
    <ul className={styles.list}>
      {todos.length ? getTodos().map(todo => (
        <ListItem 
          key={todo.id}
          id={todo.id}
          text={todo.title}
          completed={todo.completed}
          deleteItem={onDelete}
          completeItem={completeTodo}
          updateText={onUpdate}
        />
      )) : "No todos :)"}
    </ul>
  );
};
