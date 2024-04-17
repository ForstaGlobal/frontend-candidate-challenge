import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import CatergoryFilter from "../CatergoryFilter";
import { TodoType } from "../../../models/todo";
describe("Category filter component", () => {
  const todos: TodoType[] = [
    {
      id: 1,
      task: "Test1",
      description: "Test Description",
      category: "Work",
      completed: true,
    },
    {
      id: 2,
      task: "Test2",
      description: "Test Description",
      category: "Work",
      completed: true,
    },
    {
      id: 3,
      task: "Test3",
      description: "Test Description",
      category: "Home",
      completed: true,
    },
  ];
  test("Should show category with number of todos", async () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: true,
        searchQuery: "",
        filterCategory: "Work",
      },
    };
    renderWithProviders(<CatergoryFilter />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("Work(2)")).toBeInTheDocument();
  });
  test("Should work with filtered data", async () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: true,
        searchQuery: "Test2",
        filterCategory: "Work",
      },
    };
    renderWithProviders(<CatergoryFilter />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("Work(1)")).toBeInTheDocument();
  });
});
