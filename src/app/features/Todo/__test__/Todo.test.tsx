import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "../Todo";
import { TodoType } from "../../../models/todo";
import { renderWithProviders } from "../../../utils/test-util";
describe("Todo integration test", () => {
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

  it("should open popup on click of add button", async () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: false,
        searchQuery: "",
        filterCategory: "",
      },
    };
    renderWithProviders(<Todo />, {
      preloadedState: initialState,
    });
    const button = screen.getByTestId("addBtn");
    await fireEvent.click(button);

    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should display items", async () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: false,
        searchQuery: "",
        filterCategory: "",
      },
    };
    renderWithProviders(<Todo />, {
      preloadedState: initialState
    });
    const button = screen.getByTestId("addBtn");
    await fireEvent.click(button);

    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
