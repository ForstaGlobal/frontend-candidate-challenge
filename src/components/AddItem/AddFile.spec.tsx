import { AddItem } from "./AddItem";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddItem", () => {
  it("Should render AddItem Component", () => {
    const setTodos = jest.fn();
    render(<AddItem todos={[]} setTodos={setTodos} />);
    expect(screen.getByTestId("input")).toBeDefined();
    expect(screen.getByTestId("addbtn")).toBeDefined();
  });

  it("Should NOT add todoItem when input is empty", () => {
    const setTodos = jest.fn();
    render(<AddItem todos={[]} setTodos={setTodos} />);
    const inputlm = screen.getByTestId("input") as HTMLInputElement;
    expect(inputlm.value).toBe("");
    fireEvent.click(screen.getByTestId("addbtn"));
    expect(setTodos).not.toHaveBeenCalled();
  });

  it("Should NOT add todoItem when input has only white spaces", () => {
    const setTodos = jest.fn();
    render(<AddItem todos={[]} setTodos={setTodos} />);
    const inputlm = screen.getByTestId("input") as HTMLInputElement;
    expect(inputlm.value).toBe("");
    fireEvent.change(inputlm, { target: { value: "     " } });
    fireEvent.click(screen.getByTestId("addbtn"));
    expect(setTodos).not.toHaveBeenCalled();
  });

  it("Should ADD todoItem when correct input is provided", () => {
    const setTodos = jest.fn();
    const todos = [
      {
        id: 1,
        text: "Item 1",
        isDone: false,
      },
      {
        id: 2,
        text: "Item 2",
        isDone: false,
      },
    ];
    render(<AddItem todos={todos} setTodos={setTodos} />);
    const inputlm = screen.getByTestId("input") as HTMLInputElement;
    fireEvent.change(inputlm, { target: { value: "Item 3" } });
    fireEvent.click(screen.getByText("Add"));
    expect(setTodos).toHaveBeenCalledWith([
      {
        id: expect.any(Number),
        text: "Item 3",
        isDone: false,
      },
      ...todos,
    ]);
  });
});
