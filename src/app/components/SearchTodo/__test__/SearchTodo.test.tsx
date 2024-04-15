import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-util";
import SearchTodo from "../SearchTodo";
import { setupStore } from "../../../redux/store";
describe("Search Todo component", () => {
test("search todo", async () => {
  const searchText = "test";
  const store = setupStore();
  renderWithProviders(<SearchTodo />, { store });
  const input = screen.getByPlaceholderText("Search todo...");
  fireEvent.change(input, { target: { value: searchText } });
  await new Promise((r) => setTimeout(r, 500));
  fireEvent.change(input, { target: { value: searchText } });
  expect(store.getState().todo.searchQuery).toBe(searchText);
});
});