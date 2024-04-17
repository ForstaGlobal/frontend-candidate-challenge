import React from "react";

import { render, screen } from "@testing-library/react";
import { TodoList } from "../../components/Todo/TodoList";

describe("TodoList", () => {
  it("renders app", () => {
    const submit = () => {};
    const todoForm = render(
      <TodoList
        todos={[]}
        onDeleteTask={() => {}}
        onEditTask={() => {}}
        onToggleComplete={() => {}}
      />
    );
    expect(todoForm).toBeDefined();
  });
});
