import { render, screen } from "@testing-library/react";

import App from "./App";
import React from 'react';

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders header and task section", () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName("tasks").length).toEqual(1);
    expect(container.getElementsByTagName("header").length).toEqual(1);

    expect(screen.getByText("Task tracker")).toBeDefined();
    expect(screen.getByPlaceholderText("Something you'd like to plan?")).toBeDefined();
  });
});
