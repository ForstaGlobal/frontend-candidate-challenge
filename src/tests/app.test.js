import React from 'react';
import AddForm from '../components/AddForm';
import EditForm from '../components/EditForm';
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom';

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  //Create
    test("AddForm renders without crashing", () => {
      render(<AddForm />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    });

    test('Creates new todo when pressing enter', async () => {
      render(<AddForm value={{value: null}} />)
      const input = screen.getByRole('textbox')
    
      fireEvent.change(input, { target: { value: "abc" } });
      fireEvent.submit(input);
    
      expect(input).not.toHaveAttribute('value', 'abc');
    });

    //Edit
    test("Todo Updates", () => {
      render(<EditForm />)
      const button = screen.getByRole('button', {
        name: /update/i
      });
      fireEvent.click(button);
      screen.getByRole('button', {  name: /update/i})
      expect(screen.queryByRole(button)).not.toBeInTheDocument()
      });      
});