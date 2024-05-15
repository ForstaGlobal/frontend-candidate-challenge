import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoItemDelete =>", () => {
  it("Should call setTodos when item is deleted", () => {
    const setTodos = jest.fn();
    const todos = [
      {
        id: 1,
        text: "Item 1",
        isDone: false,
      },
      {
        id: 2,
        text: "Item 2",
        isDone: true,
      },
    ];
    render(<TodoList todos={todos} setTodos={setTodos} />);
    fireEvent.click(screen.getByTestId("todo-delete-1"));
    expect(setTodos).toHaveBeenCalledWith([
      {
        id: 2,
        text: "Item 2",
        isDone: true,
      },
    ]);
  });
});
