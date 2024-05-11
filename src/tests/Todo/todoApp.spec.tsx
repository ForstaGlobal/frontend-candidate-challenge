import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoApp from "../../components/Todo/TodoApp";
import userEvent from "@testing-library/user-event";
import { ModalProps } from "../../components/Modal";

jest.mock("../../components/Modal", () => ({
  Modal: ({ title, isOpen, onClose, children }: ModalProps) => {
    return <div>{children}</div>;
  },
}));

describe("Todo App", () => {
  it("should render todo form and todo list", () => {
    const component = render(<TodoApp />);

    expect(component).toBeDefined();
    screen.getByRole("form");
    screen.getByText(/You have no tasks./i);
  });

  it("should save a task", async () => {
    render(<TodoApp />);
    const input = screen.getByTestId("create-input");
    const submitBtn = screen.getByTestId("task-submit");

    await act(async () => {
      userEvent.click(input);
      userEvent.type(input, "new task 1");
      userEvent.click(submitBtn);
      userEvent.type(input, "new task 2");
      userEvent.click(submitBtn);
    });

    expect(screen.getAllByTestId("edit-btn").length).toEqual(2);
  });

  it("should mark complete and disable edit", async () => {
    render(<TodoApp />);
    const input = screen.getByTestId("create-input");
    const submitBtn = screen.getByTestId("task-submit");
    await act(async () => {
      userEvent.click(input);
      userEvent.type(input, "new task");
      userEvent.click(submitBtn);
    });
    const checkbox = screen.getByRole("checkbox");

    await act(async () => {
      userEvent.click(checkbox);
    });

    expect(checkbox).toBeChecked();
    expect(screen.queryByTestId("edit-btn")).toBeNull();
  });

  it("should edit task", async () => {
    render(<TodoApp />);
    const inputNewTask = screen.getByTestId("create-input");
    const submitBtn = screen.getByTestId("task-submit");
    await act(async () => {
      userEvent.click(inputNewTask);
      userEvent.type(inputNewTask, "new task");
      userEvent.click(submitBtn);
    });
    const editBtn = screen.getByTestId("edit-btn");

    await act(async () => {
      userEvent.click(editBtn);
    });
    const inputEditTask = screen.getByTestId("edit-input");
    const saveBtn = screen.getByText(/Save/i);
    await act(async () => {
      userEvent.click(inputEditTask);
      userEvent.type(inputEditTask, " edited");
      userEvent.click(saveBtn);
    });

    screen.getByText(/new task edited/i);
  });

  it("should delete task", async () => {
    render(<TodoApp />);
    const inputNewTask = screen.getByTestId("create-input");
    const submitBtn = screen.getByTestId("task-submit");
    await act(async () => {
      userEvent.click(inputNewTask);
      userEvent.type(inputNewTask, "new task");
      userEvent.click(submitBtn);
    });
    const deleteBtn = screen.getByTestId("delete-btn");

    await act(async () => {
      userEvent.click(deleteBtn);
    });
    const yesBtn = screen.getByText(/Yes/i);
    await act(async () => {
      userEvent.click(yesBtn);
    });

    expect(await screen.queryByText(/new task/i)).toBe(null);
  });
});
