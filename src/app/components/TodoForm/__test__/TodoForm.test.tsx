import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import TodoForm from "../TodoForm";
import { setupStore } from "../../../redux/store";
describe("TodoForm component", () => {
  test("should render the save button as disabled initially", async () => {
    const store = setupStore();
    renderWithProviders(<TodoForm />, { store });
    const saveBtn = screen.getByTestId("saveBtn");
    expect(saveBtn).toHaveAttribute("disabled");
  });

  test("should allow user to save if all required fields are present", async () => {
    const store = setupStore();
    renderWithProviders(<TodoForm />, { store });
    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "Test Task" },
    });
    fireEvent.change(screen.getByTestId("category"), {
      target: { value: "home" },
    });
    fireEvent.change(screen.getByTestId("description"), {
      target: { value: "Test Description" },
    });
    const saveBtn = screen.getByTestId("saveBtn");
    expect(saveBtn).not.toHaveAttribute("disabled");
  });
});
