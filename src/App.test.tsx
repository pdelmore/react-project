import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AddTaskForm from './AddTaskForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('adds a new task', () => {
  const handleAddTask = jest.fn();
  render(<AddTaskForm handleAddTask={handleAddTask} />);

  fireEvent.change(screen.getByLabelText(/Add new list item/i), {
    target: { value: "New test task"},
  });
fireEvent.click(screen.getByRole('button'));

expect(handleAddTask).toHaveBeenCalledWith("New test task");

});
