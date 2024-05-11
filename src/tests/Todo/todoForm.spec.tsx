import { act, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "../../components/Todo/TodoForm";

describe("Todo Form", () => {
  const mockSaveTask = jest.fn();
  it("should render a form to add tasks", () => {
    const component = render(
      <TodoForm onTaskFormSubmit={() => mockSaveTask()} />
    );
    const input = screen.getByTestId("create-input");

    expect(component).toBeDefined();
    screen.getByRole("form");
    screen.getByText(/Add/i);
    expect(screen.getByTestId("task-submit")).toBeDisabled();
  });

  it("should call save task", async () => {
    render(<TodoForm onTaskFormSubmit={() => mockSaveTask()} />);
    const input = screen.getByTestId("create-input");
    const submitBtn = screen.getByTestId("task-submit");

    await act(async () => {
      userEvent.click(input);
      userEvent.type(input, "new task");
      userEvent.click(submitBtn);
    });

    expect(mockSaveTask).toHaveBeenCalled();
  });

  it("should render edit form", () => {
    render(
      <TodoForm
        onTaskFormSubmit={() => mockSaveTask()}
        todo={{ id: "1", task: "test task", isDone: false }}
      />
    );

    screen.getByDisplayValue("test task");
    screen.getByText(/Save/i);
  });

  it("should clear input value on clear click", async () => {
    render(
      <TodoForm
        onTaskFormSubmit={() => mockSaveTask()}
        todo={{ id: "1", task: "test task", isDone: false }}
      />
    );
    screen.getByDisplayValue("test task");
    const clearBtn = screen.getByTestId("clear-input");

    await act(async () => {
      userEvent.click(clearBtn);
    });

    const res = await screen.queryByDisplayValue("test task");
    expect(res).toBeNull();
    expect(screen.getByTestId("task-submit")).toBeDisabled();
  });
});
