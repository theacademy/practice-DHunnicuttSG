import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

test('button clicks and updates state', async() => {
  render(<App />);

  // Find the button
  const button = screen.getByText('Add 1');

  // Simulate a click
  fireEvent.click(button);

  // Assertions
  await waitFor(() => {
    expect(App.count).toBeInTheDocument()
  });
});