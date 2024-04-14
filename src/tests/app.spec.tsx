import React from 'react';

import App from "../App";
import { render, screen } from "@testing-library/react";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getAllByText("Buy milk")).toBeDefined();
    screen.getAllByTestId("todo0");

    // TODO: Verify second todo
  });
  
  // TODO: Test app functionality: Create, edit, delete, mark as done.
});
