import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoContainer from '../components/ToDoContainer';

describe('ToDoContainer Component', () => {
  it('renders ToDoContainer component', () => {
    render(<ToDoContainer />);
    expect(screen.getByText('ToDo App')).toBeInTheDocument();
    expect(screen.getByTestId('CheckCircleOutlineRoundedIcon')).toBeInTheDocument();
  });
});
