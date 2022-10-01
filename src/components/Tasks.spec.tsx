import { render, screen } from "@testing-library/react";

import React from 'react';
import Tasks from './Tasks';
import userEvent from "@testing-library/user-event";

describe('Tasks', () => {

  it('should render', () => {
    const container = render(<Tasks />);

    expect(container).not.toBeUndefined();
  });

  it('should render create form and empty list', () => {
    render(<Tasks />);

    expect(screen.getByTestId("task_create_input")).toBeDefined();
    expect(screen.getByText(/Lucky you/i)).toBeDefined();
  });

  it('should render task when available', async () => {
    const user = userEvent.setup()
    render(<Tasks />);

    await user.click(screen.getByTestId("task_create_input"));
    await user.paste("test task");
    await user.click(screen.getByText("create"));

    expect(screen.getByText("test task")).toBeDefined();
  });

  it('should list new tasks first', async () => {
    const user = userEvent.setup();
    render(<Tasks />);

    const createInput = screen.getByTestId("task_create_input");
    const createButton = screen.getByText("create")
    await user.click(createInput);
    await user.paste("test task 1");
    await user.click(createButton);
    await user.click(createInput);
    await user.paste("test task 2");
    await user.click(createButton);

    const tasks = await screen.findAllByText(/test task/i);

    // First task should be latest added
    expect(tasks[0].innerHTML).toBe('test task 2');
  });

  it('should push tasks done at the bottom', async () => {
    const user = userEvent.setup();
    render(<Tasks />);

    const createInput = screen.getByTestId("task_create_input");
    const createButton = screen.getByText("create")
    await user.click(createInput);
    await user.paste("test task 1");
    await user.click(createButton);
    await user.click(createInput);
    await user.paste("test task 2");
    await user.click(createButton);

    // Mark "test task 2" as done, it should send it at the bottom of the list
    await user.click((await screen.findAllByTestId("state_toggler"))[0]);

    const tasks = await screen.findAllByText(/test task/i);

    // First task should the first added
    expect(tasks[0].innerHTML).toBe('test task 1');
  })
});