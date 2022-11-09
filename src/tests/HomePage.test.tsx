import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "../modules/home/pages/HomePage";

describe("HomePage", () => {
  it("should render the button element with text Let's plan", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const buttonElement = screen.getByRole("button", { name: "Let's plan" });
    expect(buttonElement).toBeInTheDocument();
  });
});
