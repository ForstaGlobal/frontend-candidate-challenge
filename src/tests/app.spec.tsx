import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("should render app with header logo, intro section and the todo-app", () => {
    const app = render(<App />);
    expect(app).toBeDefined();
    screen.getByTestId("app_logo");
    screen.getByText(/Hi there!/i);
    screen.getByText(/You have no tasks./i);
  });
});
