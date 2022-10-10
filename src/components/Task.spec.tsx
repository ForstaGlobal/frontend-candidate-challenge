import { render, screen } from "@testing-library/react";

import React from 'react';
import Task from './Task';
import userEvent from "@testing-library/user-event";

describe('Task', () => {
  const props = {
    task: {
      id: 123,
      description: "test task",
      done: false,
      editing: false
    },
    deleted: jest.fn(),
    updated: jest.fn(),
    stateToggled: jest.fn(),
    editingToggled: jest.fn()
  };

  it('should render', () => {
    const taskContainer = render(<Task {...props} />);

    expect(taskContainer).not.toBeUndefined();
    expect(screen.getByText("test task")).toBeDefined();
  });

  it('should trigger passed deleted prop on delete', async () => {
    const user = userEvent.setup();
    render(<Task {...props} />);

    await user.click(screen.getByTestId("delete_action"));
    expect(props.deleted).toHaveBeenCalledWith(123);
  });

  it('should trigger passed editingToggled & updated props ', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Task {...props} />);

    await user.click(screen.getByTestId("editing_toggler"));
    expect(props.editingToggled).toHaveBeenCalledWith(123);

    // This does not follow Testing Library guidelines by intention
    rerender(<Task {...props} task={{ ...props.task, editing: true }} />);

    const input = screen.getByTestId("edit_input");
    await user.click(input);
    await user.type(input, " updated");
    await user.click(screen.getByTestId("edit_submit"));
    expect(props.updated).toHaveBeenCalledWith(123, expect.objectContaining({
      description: "test task updated"
    }));
  });

  it('should trigger passed stateToggled prop', async () => {
    const user = userEvent.setup();
    render(<Task {...props} />);

    await user.click(screen.getByTestId("state_toggler"));
    expect(props.stateToggled).toHaveBeenCalledWith(123);
  });
});