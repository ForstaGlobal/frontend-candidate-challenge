import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import ProgressSection from "../ProgressSection";
import { TodoType } from "../../../models/todo";
describe("Progress Section component", () => {
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
      completed: false,
    }
  ];
  test("Should show complete task", async () => {
    const initialState = {
      todo: {
        todos: todos,
        selectedTodo: null,
        showPopup: true,
        searchQuery: "",
        filterCategory: "",
      },
    };
    renderWithProviders(<ProgressSection />, {
      preloadedState: initialState,
    });
    expect(screen.getByText("50%")).toBeInTheDocument();
  }); 
});
  