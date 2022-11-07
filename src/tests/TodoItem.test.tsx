import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../core/state/configureStore";
import { TodoItem } from "../modules/todos/components/TodoItem";

const mockedSetEditTask = jest.fn();
const mockedSetEditId = jest.fn();

describe("TodoItem", () => {
  it("should render delete end edit button", async () => {
    render(
      <Provider store={store}>
        <TodoItem
          value={1}
          setEditTask={mockedSetEditTask}
          setEditId={mockedSetEditId}
          itemId="Test"
          itemTask="Use your time..."
          itemStatus={false}
          labelId="Test"
        />
      </Provider>
    );
    const deleteButton = screen.getByTestId("deleteButton");
    const editButton = screen.getByTestId("editButton");
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });
});
