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
  itemId: string;
  itemTask: string;
  itemStatus: boolean;
  labelId: string;
}

export const TodoItem: FC<TodoItemProps> = ({
  value,
  setEditId,
  setEditTask,
  itemId,
  itemTask,
  itemStatus,
  labelId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <ListItem
      data-testid={`item ${value}`}
      key={value}
      secondaryAction={
        <Box display="flex">
          <IconButton
            edge="end"
            data-testid="editButton"
            disableRipple
            onClick={() => {
              setEditTask(itemTask);
              setEditId(itemId);
            }}
            className={classes.black}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            disableRipple
            onClick={() => {
              dispatch(deleteTodo(itemId));
            }}
            className={classes.red}
            data-testid="deleteButton"
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
            checked={itemStatus}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onClick={() => {
              dispatch(updateStatus({ _id: itemId, status: itemStatus }));
            }}
          />
        </ListItemIcon>
        <ListItemText
          className={classes.black}
          id={labelId}
          primary={itemTask}
        />
      </ListItemButton>
    </ListItem>
  );
};
