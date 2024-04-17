import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import TodoItem from "../TodoItem";
import { TodoType } from "../../../models/todo";
describe("TodoItem component", () => {
  it("should render TodoItem component correctly", () => {
    const todo: TodoType = {
      id: 1,
      task: "Test Task",
      description: "Test Description",
      category: "Work",
      completed: false,
    };

    renderWithProviders(<TodoItem todo={todo} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  it("Able to display TodoItem as complete", () => {
    const todo: TodoType = {
      id: 1,
      task: "Test Task",
      description: "Test Description",
      category: "work",
      completed: true,
    };
    const initialState = {
      todo: {
        todos: [],
        selectedTodo: null,
        showPopup: true,
        searchQuery: "",
        filterCategory: "",
      },
    };
    renderWithProviders(<TodoItem todo={todo} />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("Test Task")).toHaveStyle(
      "text-decoration: line-through;"
    );
    expect(screen.getByText("Test Description")).toHaveStyle(
      "text-decoration: line-through;"
    );
  });
});
