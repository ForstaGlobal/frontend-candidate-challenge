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

const addNewItemSchema = yup.object().shape({
  task: yup.string().required("This field is required!"),
});

interface AddNewItemFormProps {
  editTask: string;
  setEditTask: (task: string) => void;
  id: string;
}

interface SubmitDataProps {
  task: string;
  _id: string;
}

export const AddNewItemForm: FC<AddNewItemFormProps> = ({
  editTask,
  setEditTask,
  id,
}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNewItemSchema),
    defaultValues: useMemo(() => {
      return {
        task: editTask,
        _id: id,
      };
    }, [editTask, id]),
  });

  const onSubmitAddNewItem = (data: SubmitDataProps) => {
    if (editTask.length === 0) {
      dispatch(addNewTodo(data.task));
    } else {
      dispatch(updateTodo(data));
    }
    reset();
    setEditTask("");
  };

  useEffect(() => {
    reset({
      task: editTask,
      _id: id,
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
