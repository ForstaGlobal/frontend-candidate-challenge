import React from 'react';

import App from "../App";
import { render, screen } from "@testing-library/react";

describe("TodoApp", () => {
  it("renders app", () => {
    const view = render(<App />);
    expect(view).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Hi")).toBeDefined();
    screen.getByTestId("hi");

    // TODO: Verify second todo
  });
  
  // TODO: Test app functionality: Create, edit, delete, mark as done.
});
