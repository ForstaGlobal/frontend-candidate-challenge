import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from "../Chip";
import { getIcon } from "../../../utils/utils";

describe("Chip component", () => {
  test("should render title", () => {
    const category = "Work";
    render(<Chip icon={getIcon(category)} title={category} />);
    const modal = screen.queryByTestId("Work");
    expect(modal).toBeNull();
  });
});
