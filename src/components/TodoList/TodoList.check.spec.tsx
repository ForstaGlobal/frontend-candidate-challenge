import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoItemCheck =>", () => {
  const todos = [
    { id: 1, text: "Item1", isDone: false },
    {
      id: 2,
      text: "Item2",
      isDone: true,
    },
  ];

  it("Should call setTodos when clicked on checkbox", () => {
    const setTodos = jest.fn();
    render(<TodoList todos={todos} setTodos={setTodos} />);

    const inputElem = screen.getByTestId("todo-input-1");
    fireEvent.click(inputElem);
    expect(setTodos).toHaveBeenCalledWith([
      { id: 1, text: "Item1", isDone: true },
      {
        id: 2,
        text: "Item2",
        isDone: true,
      },
    ]);
  });

  it("Should apply checked class when isDone is set to true", () => {
    const setTodos = jest.fn();
    render(<TodoList todos={todos} setTodos={setTodos} />);
    const inputLm = screen.getByTestId("todo-text-2");
    expect(inputLm).toHaveClass("checked");
  });
});
