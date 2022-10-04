import React from "react";

import App from "../App";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ModalInput, RadiolInput, StyledModal } from "../components/Modal/styles";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    screen.getAllByTestId("todo0");

    // TODO: Verify second todo

    expect(screen.getByText("Buy bread")).toBeDefined();
    screen.getAllByTestId("todo0");

    // Verifies the add button

    expect(screen.getByText("Add new chore")).toBeDefined();
    screen.getAllByTestId("addButton");
  });

  test("renders the editing and deleting buttons and if both are rendered on the lists", () => {
    render(<App />);

    expect(screen.getAllByTestId("buttonsWrapper")).toBeDefined();
    screen.getAllByTestId("editButton");

    expect(screen.getAllByTestId("buttonsWrapper")).toBeDefined();
    screen.getAllByTestId("deleteButton");

    expect(screen.getAllByTestId("buttonsWrapper").length).toBe(2);
  });

  test("fires the add new chore button", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Add new chore"));

    expect(screen.getAllByTestId("modal"));
  });

  test("tests the modal input", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Add new chore"));

    const setup = () => {
      const utils = render(<ModalInput />);
      const input = utils.getByTestId("modalInput");
      return {
        input,
        ...utils,
      };
    };

    const { input } = setup();

    fireEvent.change(input, { target: { value: "Buy burritos" } });
    expect(input.value).toBe("Buy burritos");
  });

  test("tests the modal radio input", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Add new chore"));

    const setup = () => {
      const utils = render(<RadiolInput />);
      const input = utils.getByTestId("radiolInput");
      return {
        input,
        ...utils,
      };
    };

    const { input } = setup();

    fireEvent.change(input, { target: { value: "1" } });
    expect(input.value).toBe("1");
  });

  test("tests the confirm button", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Add new chore"));

    const setup = () => {
      const utils = render(<RadiolInput />);
      const input = utils.getByTestId("radiolInput");
      return {
        input,
        ...utils,
      };
    };

    const { input } = setup();

    fireEvent.click(screen.getByText("Confirm"));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

});
