import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoItemEdit =>", () => {
  const todos = [
    {
      id: 1,
      text: "Item 1",
      isDone: true,
    },
    {
      id: 2,
      text: "Item 2",
      isDone: false,
    },
  ];
  it("Should convert Edit button to Submit button", () => {
    const setTodos = jest.fn();

    render(<TodoList todos={todos} setTodos={setTodos} />);
    fireEvent.click(screen.getByTestId("todo-editbtn-1"));
    function checkSubmitBtnDefined() {
      screen.getByTestId("todo-submitbtn-1");
    }
    expect(checkSubmitBtnDefined).not.toThrow();
  });

  it("Should be able to edit item", () => {
    const setTodos = jest.fn();
    render(<TodoList todos={todos} setTodos={setTodos} />);

    fireEvent.click(screen.getByTestId("todo-editbtn-1"));
    function checkSubmitBtnDefined() {
      screen.getByTestId("todo-submitbtn-1");
    }
    expect(checkSubmitBtnDefined).not.toThrow();

    const inputElem = screen.getByTestId("todo-edit-1") as HTMLInputElement;
    fireEvent.change(inputElem, { target: { value: "Item 3" } });
    expect(inputElem.value).toBe("Item 3");
    fireEvent.click(screen.getByTestId("todo-submitbtn-1"));
    expect(setTodos).toHaveBeenCalledWith([
      {
        id: 1,
        text: "Item 3",
        isDone: true,
      },
      {
        id: 2,
        text: "Item 2",
        isDone: false,
      },
    ]);
  });
});
