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

    screen.getByTestId("logo");
    screen.getByTestId("dark-toggle");
    screen.getByTestId("todostitle");
    screen.getByTestId("newtodoinput");
    expect(screen.getByText("New Todo:")).toBeDefined();
    expect(screen.getByText("+")).toBeDefined();
    expect(screen.getByText("Save")).toBeDefined();
    expect(screen.getByText("Cancel")).toBeDefined();
    screen.getByTestId("todo0");
    expect(screen.getByText("Fix Dependencies Versions")).toBeDefined();
    screen.getByTestId("todoelem1");
    screen.getByTestId("todo1");
    screen.getByTestId("edit-1");
    screen.getByTestId("del-1");
    expect(screen.getByText("Add Tailwind CSS")).toBeDefined();
    screen.getByTestId("todoelem2");
    screen.getByTestId("todo2");
    screen.getByTestId("edit-2");
    screen.getByTestId("del-2");
    expect(screen.getByText("Add All Elements")).toBeDefined();
    screen.getByTestId("todoelem3");
    screen.getByTestId("todo3");
    screen.getByTestId("edit-3");
    screen.getByTestId("del-3");
    expect(screen.getByText("Create Required Functions")).toBeDefined();
    screen.getByTestId("todoelem4");
    screen.getByTestId("todo4");
    screen.getByTestId("edit-4");
    screen.getByTestId("del-4");
    expect(screen.getByText("Create All Tests")).toBeDefined();
    screen.getByTestId("todoelem5");
    screen.getByTestId("todo5");
    screen.getByTestId("edit-5");
    screen.getByTestId("del-5");
    expect(screen.getByText("Fix All Types")).toBeDefined();
    screen.getByTestId("todoelem6");
    screen.getByTestId("todo6");
    screen.getByTestId("edit-6");
    screen.getByTestId("del-6");
    expect(screen.getByText("Commit All Changes and request Pull")).toBeDefined();

  });
});
