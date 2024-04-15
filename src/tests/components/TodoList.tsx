import React from "react";

import { render, screen } from "@testing-library/react";
import { TodoList } from "../../components/TodoList";

describe("TodoList", () => {
  it("renders app", () => {
    const submit = () => {};
    const todoForm = render(
      <TodoList todos={[]} onDeleteTask={() => {}} onEditTask={() => {}} />
    );
    expect(todoForm).toBeDefined();
  });
});
