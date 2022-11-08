import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../core/state/configureStore";
import { TodoItem } from "../modules/todos/components/TodoItem";

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
});
