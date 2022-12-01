// import React from 'react';

// import App from "../App";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

// describe("TodoApp", () => {
//   it("renders app", () => {
//     const app = render(<App />);
//     expect(app).not.toBeUndefined();
//   });

//   it("renders initial items", () => {
//     render(<App />);

//     expect(screen.getByText("Buy milk")).toBeDefined();
//     screen.getByTestId("todo0");

//     // TODO: Verify second todo
//   });

//   // TODO: Test app functionality: Create, edit, delete, mark as done.
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('renders learn heading text', () => {
  const expectedText = 'Things to do today:'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

it('has the button', () => {
  const expectedText = 'Submit Todo'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

it('has the first todo', () => {
  const expectedText = 'Buy milk'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

it('has the second todo', () => {
  const expectedText = 'Buy milk'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

