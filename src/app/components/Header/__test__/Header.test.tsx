import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../Header"; 

describe("Header component", () => {
  test("renders header with 'Todo App' text", () => {
     render(<Header />);
    const headerText = screen.getByText("Todo App");
    expect(headerText).toBeInTheDocument();
  });
});
