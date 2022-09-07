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

    expect(screen.getByText("Buy milk")).toBeDefined();
    screen.getByTestId("todo0");

    // TODO: Verify second todo
  });
});
