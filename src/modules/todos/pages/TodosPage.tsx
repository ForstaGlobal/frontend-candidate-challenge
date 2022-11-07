import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { UILayout } from "../../../core/styles/shared/UILayout";
import { AddNewItemForm } from "../components/AddNewItemForm";
import { List } from "@mui/material";
import { TodoItem } from "../components/TodoItem";

// This page is the page on which all todo items, and form for adding and updating the item are displayed.
// To get all todo items from the state hook called useSelector from react-redux is used
// useState hook is used to store data of the selected item which is later on used for its updating
interface ItemProps {
  status: boolean;
  task: string;
  _id: string;
}

export const TodosPage: FC = () => {
  const [editTask, setEditTask] = useState("");
  const [editId, setEditId] = useState("");

  const allTodos = useSelector((state: any) => state.allTodos?.allTodos);
  const sortedItems = [...allTodos].reverse();

  return (
    <UILayout text="Today's To-Do List">
      <AddNewItemForm
        editTask={editTask}
        setEditTask={setEditTask}
        id={editId}
      />
      <List>
        {sortedItems.map((item: ItemProps, value: number) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <TodoItem
              key={value}
              value={value}
              labelId={labelId}
              itemId={item._id}
              itemTask={item.task}
              itemStatus={item.status}
              setEditId={setEditId}
              setEditTask={setEditTask}
            />
          );
        })}
      </List>
    </UILayout>
  );
};
