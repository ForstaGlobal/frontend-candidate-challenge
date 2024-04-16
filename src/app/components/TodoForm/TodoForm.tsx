import React from "react";
import { Form, Field } from "react-final-form";
import "./TodoForm.scss";
import { generateUniqueId } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../redux/todo/todosSlice";
import { RootState } from "../../redux/store";
import { CirclePicker } from "react-color";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import colors from "../../styles/colors";
import moment from "moment";

interface Props {
  hidePopup?: () => void;
}

const TodoForm: React.FC<Props> = ({ hidePopup }) => {
  const selectedTodo = useSelector(
    (state: RootState) => state.todo.selectedTodo
  );
  const initialValue = selectedTodo || {
    id: generateUniqueId(),
    color: colors.darkPink,
  };
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    console.log(values);
    if (!selectedTodo) {
      dispatch(addTodo(values));
    } else {
      dispatch(updateTodo(values));
    }
    hidePopup?.();
  };

  const validate = (values: any) => {
    const errors: { [key: string]: string } = {};
    if (!values.task) {
      errors.task = "Task is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={initialValue}
      render={({ handleSubmit, valid }) => (
        <form onSubmit={handleSubmit}>
          <Field name="id" component="input" type="hidden" />

          <div className="form-group">
            <label htmlFor="task">
              Task<span className="required">*</span>
            </label>
            <Field name="task">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="text"
                    placeholder="Enter task"
                    data-testid="name"
                  />
                  {meta.error && meta.touched && (
                    <span className="error-msg">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Category<span className="required">*</span>
            </label>
            <Field name="category" component="select" data-testid="category">
              <option value="">Select category</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="other">Other</option>
            </Field>
            <Field name="category">
              {({ meta }) =>
                meta.error &&
                meta.touched && <span className="error-msg">{meta.error}</span>
              }
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <Field name="dueDate">
              {({ input }) => (
                <div>
                  <DatePicker
                    {...input}
                    selected={input.value}
                    onChange={input.onChange}
                    showTimeInput
                    dateFormat="Pp"
                    minDate={ moment().toDate() } 
                  />
                </div>
              )}
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description">
              {({ input }) => (
                <textarea
                  {...input}
                  rows={3}
                  placeholder="Enter description"
                  data-testid="description"
                ></textarea>
              )}
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <Field name="color">
              {({ input }) => (
                <CirclePicker
                  colors={[
                    colors.red,
                    colors.darkPink,
                    colors.lightPink,
                    colors.darkGreen,
                    colors.green,
                    colors.brown,
                  ]}
                  width="100%"
                  color={input.value}
                  onChange={(color) => input.onChange(color.hex)}
                />
              )}
            </Field>
          </div>
          <div className="buttons">
            <button type="button" onClick={hidePopup}>
              Cancel
            </button>
            <button
              type="submit"
              data-testid="saveBtn"
              className={valid ? "enable-btn" : "disable-btn"}
              disabled={!valid}
            >
              Save
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default TodoForm;
