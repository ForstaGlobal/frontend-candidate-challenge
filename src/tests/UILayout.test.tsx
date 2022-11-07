import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UILayout } from "../core/styles/shared/UILayout";

const MockUILayout = () => {
  return (
    <BrowserRouter>
      <UILayout text="Today's to do list" />
    </BrowserRouter>
  );
};

describe("UILayout", () => {
  it("should render the same text passes into text prop", async () => {
    render(<MockUILayout />);
    const typographyElement = screen.getByText(/Today's to do list/i);
    expect(typographyElement).toBeInTheDocument();
  });

  it("should render the typography with title App Name", async () => {
    render(<MockUILayout />);
    const typographyElement = screen.getByTitle("App Name");
    expect(typographyElement).toBeInTheDocument();
  });
});
