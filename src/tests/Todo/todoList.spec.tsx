import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoList } from "../../components/Todo/TodoList";
import { Todo } from "../../interfaces/types";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ModalProps } from "../../components/Modal";

jest.mock("../../components/Modal", () => ({
  Modal: ({ title, isOpen, onClose, children }: ModalProps) => {
    return <div>{children}</div>;
  },
}));

describe("Todo list", () => {
  const mockOnDeleteTask = jest.fn();
  const mockOnEditTask = jest.fn();
  const mockOnToggleComplete = jest.fn();
  const mockTodo: Todo = {
    id: "1",
    task: "Test task",
    isDone: false,
  };

  jest.spyOn(React, "useRef").mockReturnValue({
    current: {
      showModal: jest.fn(),
      close: jest.fn(),
    },
  });

  it("should render component with empty inital state", () => {
    const component = render(
      <TodoList
        todos={[]}
        onDeleteTask={() => mockOnDeleteTask()}
        onEditTask={() => mockOnEditTask()}
        onToggleComplete={() => mockOnToggleComplete()}
      />
    );

    expect(component).toBeDefined();
    screen.getByText(/You have no tasks/i);
  });

  it("should render list of tasks", () => {
    render(
      <TodoList
        todos={[mockTodo, { ...mockTodo, id: "2" }]}
        onDeleteTask={() => mockOnDeleteTask()}
        onEditTask={() => mockOnEditTask()}
        onToggleComplete={() => mockOnToggleComplete()}
      />
    );
    const taskListItems = screen.getAllByTestId("edit-btn");
    expect(taskListItems.length).toEqual(2);
  });

  it("should call onToggleComplete on task checked", async () => {
    render(
      <TodoList
        todos={[mockTodo]}
        onDeleteTask={() => mockOnDeleteTask()}
        onEditTask={() => mockOnEditTask()}
        onToggleComplete={() => mockOnToggleComplete()}
      />
    );
    const checkbox = screen.getByRole("checkbox");

    await act(async () => {
      userEvent.click(checkbox);
    });

    expect(mockOnToggleComplete).toHaveBeenCalled();
  });

  it("should open delete confirmation and trigger delete event on submit", async () => {
    render(
      <TodoList
        todos={[mockTodo]}
        onDeleteTask={() => mockOnDeleteTask()}
        onEditTask={() => mockOnEditTask()}
        onToggleComplete={() => mockOnToggleComplete()}
      />
    );
    const deleteBtn = screen.getByTestId("delete-btn");

    await act(async () => {
      userEvent.click(deleteBtn);
    });
    const yesBtn = screen.getByText(/Yes/i);
    await act(async () => {
      userEvent.click(yesBtn);
    });

    expect(mockOnDeleteTask).toHaveBeenCalled();
  });

  it("should open edit from and trigger event to save edited task on submit", async () => {
    render(
      <TodoList
        todos={[mockTodo]}
        onDeleteTask={() => mockOnDeleteTask()}
        onEditTask={() => mockOnEditTask()}
        onToggleComplete={() => mockOnToggleComplete()}
      />
    );
    const editBtn = screen.getByTestId("edit-btn");

    await act(async () => {
      userEvent.click(editBtn);
    });
    const input = screen.getByTestId("edit-input");
    const saveBtn = screen.getByText(/Save/i);
    await act(async () => {
      userEvent.click(input);
      userEvent.type(input, " edited");
      userEvent.click(saveBtn);
    });

    expect(mockOnEditTask).toHaveBeenCalled();
  });
});
