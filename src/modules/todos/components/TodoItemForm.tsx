import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewTodo, updateTodo } from "../store/todosPageSlice";
import { FC, useEffect, useMemo } from "react";

// This component is a form for adding a new item and updating the old one.
// The form is made by using react-hook-form and validation is done with yup,
// so there is no possibility to add the item without content.
// For default values, useMemo and useEffect hooks are used,
// according to the length of the editTask updating or adding action will be triggered

const todoItemSchema = yup.object().shape({
  task: yup.string().required("This field is required!"),
});

interface TodoItemFormProps {
  editTask: string;
  setEditTask: (task: string) => void;
  id: string;
  setEditId?: (id: string) => void;
}

interface SubmitDataProps {
  task: string;
  id: string;
}

export const TodoItemForm: FC<TodoItemFormProps> = ({
  editTask,
  setEditTask,
  id,
  setEditId,
}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoItemSchema),
    defaultValues: useMemo(() => {
      return {
        task: editTask,
        id,
      };
    }, [editTask, id]),
  });

  const onSubmitAddNewItem = (data: SubmitDataProps) => {
    if (editTask.length === 0) {
      dispatch(addNewTodo(data.task));
    } else {
      dispatch(updateTodo(data));
      setEditId && setEditId("");
    }
    reset();
    setEditTask("");
  };

  useEffect(() => {
    reset({
      task: editTask,
      id,
    });
  }, [editTask, reset, id]);

  return (
    <form onSubmit={handleSubmit(onSubmitAddNewItem)}>
      <Box py={5} display={{ xs: "block", md: "flex" }} alignItems="center">
        <FormControl error={Boolean(errors.task)} fullWidth>
          <Controller
            name="task"
            control={control}
            render={() => (
              <OutlinedInput
                type="text"
                multiline
                id="task"
                placeholder="Write your new item"
                inputProps={register("task")}
                sx={{ color: "black" }}
              />
            )}
          />
          <FormHelperText sx={{ margin: 0 }}>
            {errors?.task?.message}
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          data-testid="submitButton"
          variant="contained"
          sx={{
            ml: { xs: 0, md: 2 },
            mt: { xs: 2, md: 0 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          {editTask.length === 0 ? `Add` : "Edit"}
        </Button>
      </Box>
    </form>
  );
};
