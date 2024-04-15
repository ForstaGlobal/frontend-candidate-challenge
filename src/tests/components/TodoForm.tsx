import React from "react";

import { render, screen } from "@testing-library/react";
import { TodoForm } from "../../components/TodoForm";

describe("TodoForm", () => {
  it("renders app", () => {
    const submit = () => {};
    const todoForm = render(<TodoForm onTaskFormSubmit={submit} />);
    expect(todoForm).toBeDefined();
  });
});
