import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it('renders initial items', () => {
    render(<App />);
    expect(screen.getByText('ToDo App')).toBeInTheDocument();
  });

  it('changes theme on click', () => {
    render(<App />);

    const themeBlue = screen.getByText('', { selector: '#theme-blue' });
    fireEvent.click(themeBlue);

    expect(document.querySelector('.App')).toHaveClass('theme-blue');
  });

  it('retains theme after reload', () => {
    localStorage.setItem('theme-color', 'theme-orange');
    render(<App />);

    expect(document.querySelector('.App')).toHaveClass('theme-orange');
  });
});
