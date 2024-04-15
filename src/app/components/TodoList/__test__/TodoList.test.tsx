import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import TodoList from "../TodoList";
import { TodoType } from "../../../models/todo";
describe("TodoList component", () => {
  const todos: TodoType[] = [
    {
      id: 1,
      task: "Task1",
      description: "Test Description",
      category: "work",
      completed: false,
    },
    {
      id: 2,
      task: "Task2",
      description: "Test Description 2",
      category: "work",
      completed: false,
    },
  ];

  it("should render TodoItems correctly", () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: true,
        searchQuery: "",
        filterCategory: "",
      },
    };
    renderWithProviders(<TodoList />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("Task1")).toBeInTheDocument();
    expect(screen.getByText("Task2")).toBeInTheDocument();
  });

  it("should filter TodoItems based on search query", () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: true,
        searchQuery: "task1",
        filterCategory: "",
      },
    };
    renderWithProviders(<TodoList />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("Task1")).toBeInTheDocument();
  });
});
