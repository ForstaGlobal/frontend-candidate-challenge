import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task from "../../components/Todo/Task";
import userEvent from "@testing-library/user-event";
import { Todo } from "../../interfaces/types";

describe("Task block", () => {
  const mockToggleComplete = jest.fn();
  const mockTodo: Todo = { id: "13", task: "test task", isDone: false };

  it("should render task and a checkbox with initial state", () => {
    const component = render(
      <Task todo={mockTodo} onToggleComplete={() => mockToggleComplete()} />
    );
    const checkbox = screen.getByRole("checkbox");

    expect(component).toBeDefined();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    screen.getByText(/test task/i);
  });

  it("should mark complete when checked", async () => {
    render(
      <Task todo={mockTodo} onToggleComplete={() => mockToggleComplete()} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await act(async () => {
      userEvent.click(checkbox);
    });

    expect(checkbox).toBeChecked();
    expect(mockToggleComplete).toHaveBeenCalled();
  });
});
