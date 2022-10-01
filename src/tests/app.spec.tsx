import React from 'react';

import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Add Input Element")).toBeDefined();
    screen.getByTestId("todo0");
    expect(screen.getByText("Add Add Button")).toBeDefined();
    screen.getByTestId("todo1");
    expect(screen.getByText("Get a Coffee")).toBeDefined();
    screen.getByTestId("todo2");

  });
});
