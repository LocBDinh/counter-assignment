// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import the Counter component here
import Counter from '../components/Counter';


  beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
  });

  test('renders counter message', () => {
    expect(screen.getByText(/counter/i)).toBeInTheDocument();
  });

  test('should render initial count with value of 0', () => {
    expect(screen.getByTestId('count').textContent).toBe('0');
  });

  test('clicking + increments the count', () => {
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('1');
  });

  test('clicking - decrements the count', () => {
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('-1');
  });
