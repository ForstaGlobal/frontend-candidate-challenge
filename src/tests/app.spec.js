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
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('it renders the h1 heading text', () => {
  const expectedText = 'Things to do today:'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

test('it renders the form button text', () => {
  const expectedText = 'Submit Todo'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

test('it renders the first todo text', () => {
  const expectedText = 'Buy milk'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

test('it renders the second todo text', () => {
  const expectedText = 'Buy bread'
  const { getByText } = render(<App />)
  getByText(expectedText)
})

describe('WHEN app is rendered with these', () => {
  let getByLabelText, getByText, container;
  beforeEach(() => {
    ({ getByLabelText, getByText, container } = render(<App />))
  })

  describe("AND when a todo is added", () => {
    beforeEach(() => {
      fireEvent.change(getByLabelText(/enter todo/i), {
        target: { value: "Go shopping" }
      });
      fireEvent.click(getByText(/submit todo/i))
    })

    test("THEN that todo is visible", () => {
      const expectedText = 'Go shopping'
      const { getByText } = render(<App />)
      getByText(expectedText)
    })

  }) // second describe
}) // first describe
