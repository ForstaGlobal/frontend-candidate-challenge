import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../core/state/configureStore";
import { TodosPage } from "../modules/todos/pages/TodosPage";

const MockTodosPage = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TodosPage />
      </BrowserRouter>
    </Provider>
  );
};

describe("TodosPage", () => {
  it("should render the initial items", async () => {
    render(<MockTodosPage />);
    const divElement = await screen.findAllByTestId(/item/i);
    expect(divElement.length).toBe(2);
  });
});
