/* eslint-disable testing-library/no-wait-for-side-effects */
import App from "../App";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders app", () => {
    const view = render(<App />);
    expect(view).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    screen.getByTestId("listItem-0");

    expect(screen.getByText("Buy bread")).toBeDefined();
    screen.getByTestId("listItem-1");
  });

  it("should be posible to add new todo", async () => {
    render(<App />);
    
    fireEvent.change(screen.getByTestId("new-item-input"), { target: { value: "Buy eggs" } });
    fireEvent.click(screen.getByTestId("add-new-todo"));

    fireEvent.click(screen.getByTestId("add-new-todo"));

    expect(screen.getByText("Buy eggs")).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText("New todo is successfully added")).toBeInTheDocument();
    });
  });

  it("should be posible to rename todo", async () => {
    render(<App />);

    const input = within(screen.getByTestId("listItem-0")).getByRole("textbox");
    fireEvent.change(input, { target: { value: "Buy oatmeal milk" } });
    
    fireEvent.blur(input);
    
    await waitFor(() => {
      expect(screen.getByText("Buy oatmeal milk")).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByText("Successfully updated")).toBeInTheDocument();
    }, { timeout: 1600});
  });

  it("should be posible to complete todo", () => {
    render(<App />);

    const listItem = screen.getByTestId('listItem-1');
    const checkbox = within(listItem).getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("should be posible to remove todo", async () => {
    render(<App />);

    const listItem = screen.getByTestId('listItem-0');
    const removeButton = within(listItem).getByText("+");

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(screen.queryByTestId("listItem-0")).toBeNull();
    }, { timeout: 800});

    await waitFor(() => {
      expect(screen.getByText("Successfully deleted")).toBeInTheDocument();
    });
  });
});
