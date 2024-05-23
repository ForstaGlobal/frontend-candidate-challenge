import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { DEFAULT_STATE } from "../context/TodoListProvider";
import { act } from "react-dom/test-utils";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    const firstTodo = screen.getByText(DEFAULT_STATE[0].text);
    const secondTodo = screen.getByText(DEFAULT_STATE[1].text);

    expect(firstTodo).toBeInTheDocument();
    expect(secondTodo).toBeInTheDocument();
  });

  it("Create todo item", async () => {
    render(<App />);

    const myFirstTodo = "my first todo";
    const input = screen.getByTestId("text-box-input");
    const addButton = screen.getByTestId("text-box-submit-btn");

    await act(async () => {
      await userEvent.type(input, myFirstTodo);
      await userEvent.click(addButton);
    });

    expect(screen.getByText(myFirstTodo)).toBeInTheDocument();
  });

  it("Edit todo item", async () => {
    render(<App />);

    const editButton = screen.getAllByTestId("todo-item-edit-btn")[0]; // first item

    await act(async () => {
      await userEvent.click(editButton);
    });

    const editInput = screen.getByDisplayValue(DEFAULT_STATE[0].text);

    expect(editInput).toBeInTheDocument();

    const editedTodo = "Buy ice cream";
    const confimButton = screen.getByTestId("edit-box-edit-btn");

    await act(async () => {
      await userEvent.clear(editInput);
      await userEvent.type(editInput, editedTodo);
      await userEvent.click(confimButton);
    });

    expect(screen.getByTestId(`todo-${editedTodo}`)).toBeInTheDocument();
  });

  it("Mark item as done", async () => {
    render(<App />);

    const secondItemText = DEFAULT_STATE[1].text;
    const secondItemToggleButton = screen.getAllByTestId(
      "todo-item-toggle-btn"
    )[1];

    await act(async () => {
      await userEvent.click(secondItemToggleButton);
    });

    const toggledTodo = screen.getByTestId(`todo-${secondItemText}`);

    expect(toggledTodo.className).toBe("completedTodo");
  });

  it("Delete a todo", async () => {
    render(<App />);

    const firstTodo = DEFAULT_STATE[0].text;
    const firstRemoveButton = screen.getAllByTestId("todo-item-remove-btn")[0];

    await act(async () => {
      await userEvent.click(firstRemoveButton);
    });

    expect(screen.queryByText(firstTodo)).not.toBeInTheDocument();
  });
});
