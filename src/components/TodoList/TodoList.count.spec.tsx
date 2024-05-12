import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

describe("TodoListCount", () => {
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
    {
      id: 3,
      text: "Item 3",
      isDone: true,
    },
  ];

  it("Should show correct total count", () => {
    render(<TodoList todos={todos} setTodos={() => {}} />);
    expect(screen.getByText("Total 3")).toBeDefined();
  });

  it("Should show correct completed tasks count", () => {
    render(<TodoList todos={todos} setTodos={() => {}} />);
    expect(screen.getByText("Completed 2 of 3")).toBeDefined();
  });
});
