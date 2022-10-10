import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Header from "./Header";
import React from 'react';

describe('Header', () => {

  it('should render', () => {
    const header = render(<Header />);

    expect(header).not.toBeUndefined();
    expect(screen.getByText("Task tracker")).toBeDefined();
  })
})