import { useDispatch } from "react-redux";
import { deleteTodo, updateStatus } from "../store/todosPageSlice";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { ItemProps } from "../pages/TodosPage";

// This component is used to show detailed information about one to do item,
// to check if one item is done or not, to update or delete the item.
// for updating and deleting item hook called useDispatch and
// actions defined in reducers are used

const useStyles = makeStyles({
  black: {
    color: "black",
  },
  red: {
    color: "red",
  },
});

interface TodoItemProps {
  value: number;
  setEditTask: (task: string) => void;
  setEditId: (id: string) => void;
  item: ItemProps;
  editId?: string;
}

export const TodoItem: FC<TodoItemProps> = ({
  value,
  setEditId,
  setEditTask,
  item,
  editId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, task, completed } = item;

  return (
    <ListItem
      data-testid={`item ${value}`}
      secondaryAction={
        <Box display="flex">
          <IconButton
            edge="end"
            data-testid="editButton"
            disableRipple
            onClick={() => {
              setEditTask(task);
              setEditId(id);
            }}
            className={classes.black}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            disableRipple
            onClick={() => dispatch(deleteTodo(id))}
            className={classes.red}
            data-testid="deleteButton"
            disabled={editId === id}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            onClick={() => dispatch(updateStatus({ id, completed }))}
          />
        </ListItemIcon>
        <ListItemText className={classes.black} primary={task} />
      </ListItemButton>
    </ListItem>
  );
};
