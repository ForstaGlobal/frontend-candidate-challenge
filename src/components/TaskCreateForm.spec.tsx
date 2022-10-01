import { render, screen } from "@testing-library/react";

import React from 'react';
import TaskCreateForm from "./TaskCreateForm";
import userEvent from "@testing-library/user-event";

describe('TaskCreateForm', () => {
  let onSubmit = jest.fn();

  it('should render', () => {
    const component = render(<TaskCreateForm onFormSubmit={onSubmit} />);
    expect(component).not.toBeUndefined();
    expect(screen.getByPlaceholderText("Something you'd like to plan?")).toBeDefined();
  });

  it('should call passed on submit prop', async () => {
    const user = userEvent.setup()
    render(<TaskCreateForm onFormSubmit={onSubmit} />);

    await user.click(screen.getByTestId("task_create_input"));
    await user.paste("test task");
    await user.click(screen.getByText("create"));

    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining(
      {
        description: "test task",
        done: false,
        editing: false
      }
    ));
  });
})