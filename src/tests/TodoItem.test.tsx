import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../core/state/configureStore";
import { TodoItem } from "../modules/todos/components/TodoItem";
import todosReducer, {
  deleteTodo,
  updateStatus,
} from "../modules/todos/store/todosPageSlice";
import { mockedInitialState, mockedTask } from "./TodoItemForm.test";

const mockedSetEditTask = jest.fn();
const mockedSetEditId = jest.fn();

const item = {
  id: "1",
  task: "Read books",
  completed: false,
};

describe("TodoItem", () => {
  it("should render delete end edit button", async () => {
    render(
      <Provider store={store}>
        <TodoItem
          value={1}
          item={item}
          setEditTask={mockedSetEditTask}
          setEditId={mockedSetEditId}
        />
      </Provider>
    );
    const deleteButton = screen.getByTestId("deleteButton");
    const editButton = screen.getByTestId("editButton");
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it("should render delete action", () => {
    expect(todosReducer(mockedInitialState, deleteTodo("1"))).toEqual({
      allTodos: [],
    });
  });

  it("should render update status of uncompleted item to completed item", () => {
    expect(
      todosReducer(
        mockedInitialState,
        updateStatus({ id: "1", completed: false })
      )
    ).toEqual({
      allTodos: [{ id: "1", task: mockedTask, completed: true }],
    });
  });

  it("should render update status of completed item to uncomplited item", () => {
    const mockData = {
      allTodos: [{ id: "1", task: mockedTask, completed: true }],
    };
    expect(
      todosReducer(mockData, updateStatus({ id: "1", completed: true }))
    ).toEqual(mockedInitialState);
  });
});
