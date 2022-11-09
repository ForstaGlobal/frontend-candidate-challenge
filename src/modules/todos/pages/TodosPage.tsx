import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { UILayout } from "../../../core/styles/shared/UILayout";
import { TodoItemForm } from "../components/TodoItemForm";
import { List } from "@mui/material";
import { TodoItem } from "../components/TodoItem";
import { AppState } from "../../../core/state/rootReducer";

// This page is the page on which all todo items, and form for adding and updating the item are displayed.
// To get all todo items from the state hook called useSelector from react-redux is used
// useState hook is used to store data of the selected item which is later on used for its updating
export interface ItemProps {
  completed: boolean;
  task: string;
  id: string;
}

export const TodosPage: FC = () => {
  const [editTask, setEditTask] = useState("");
  const [editId, setEditId] = useState("");

  const allTodos = useSelector((state: AppState) => state.allTodos?.allTodos);

  return (
    <UILayout text="Today's To-Do List">
      <TodoItemForm
        editTask={editTask}
        setEditTask={setEditTask}
        id={editId}
        setEditId={setEditId}
      />
      <List>
        {allTodos.map((item: ItemProps, value: number) => {
          return (
            <TodoItem
              key={value}
              value={value}
              item={item}
              setEditId={setEditId}
              editId={editId}
              setEditTask={setEditTask}
            />
          );
        })}
      </List>
    </UILayout>
  );
};
