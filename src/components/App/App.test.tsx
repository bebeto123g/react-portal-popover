import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/** test === it */
test('renders "Open Dialog" react', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open Dialog/i);
  expect(linkElement).toBeInTheDocument();
});
