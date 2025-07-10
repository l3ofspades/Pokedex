import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokedex header', () => {
  render(<App />);
  const headerElement = screen.getByText(/pokedex/i);
  expect(headerElement).toBeInTheDocument();
});
