import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../core/state/configureStore";
import { TodoItemForm } from "../modules/todos/components/TodoItemForm";
import todosReducer, {
  addNewTodo,
  updateTodo,
} from "../modules/todos/store/todosPageSlice";

const mockedSetEditTask = jest.fn();

export const mockedTask = "Use your time...";

const mockedUpdatedTask = "Use your time updated...";

export const mockedInitialState = {
  allTodos: [{ id: "1", task: mockedTask, completed: false }],
};

const MockTodoItemForm = () => {
  return (
    <Provider store={store}>
      <TodoItemForm editTask="" setEditTask={mockedSetEditTask} id="1a" />
    </Provider>
  );
};

describe("AddNewItemForm", () => {
  it("Add new item form renders without crashing", () => {
    render(<MockTodoItemForm />);
  });

  it("should render input element", async () => {
    render(<MockTodoItemForm />);
    const inputElement = screen.getByPlaceholderText(
      /Write your new item/i
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in the input element", async () => {
    render(<MockTodoItemForm />);
    const inputElement = screen.getByPlaceholderText(
      /Write your new item/i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "Enjoy your life..." },
    });
    expect(inputElement.value).toBe("Enjoy your life...");
  });

  it("should return add when the edit task is empty", async () => {
    render(<MockTodoItemForm />);
    const buttonElement = screen.getByTestId("submitButton");
    expect(buttonElement.textContent).toBe("Add");
  });

  it("should return edit when the edit task is not empty", async () => {
    render(<MockTodoItemForm />);
    const buttonElement = screen.getByTestId("submitButton");
    expect(buttonElement.textContent).not.toBe("Edit");
  });

  it("should render add action", () => {
    expect(
      todosReducer(mockedInitialState, addNewTodo("Add new item..."))
    ).not.toEqual(mockedInitialState);
  });

  it("should add new todo item", () => {
    let state = store.getState().allTodos;
    store.dispatch(addNewTodo("Read a book..."));
    state = store.getState().allTodos;
    expect(state.allTodos.length).toBe(3);
  });

  it("should render update action", () => {
    expect(
      todosReducer(
        mockedInitialState,
        updateTodo({ id: "1", task: mockedUpdatedTask })
      )
    ).toEqual({
      allTodos: [{ id: "1", task: mockedUpdatedTask, completed: false }],
    });
  });
});
