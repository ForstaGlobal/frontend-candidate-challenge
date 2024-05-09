import React from 'react';

import App from '../App';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../utils/test-utils';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = renderWithProviders(<App />);
    expect(app).not.toBeUndefined();
  });

  it('renders initial items', () => {
    renderWithProviders(<App />);

    expect(screen.getByText('Buy milk')).toBeDefined();
    screen.getByTestId('todo0');

    // TODO: Verify second todo
  });

  // TODO: Test app functionality: Create, edit, delete, mark as done.
});
