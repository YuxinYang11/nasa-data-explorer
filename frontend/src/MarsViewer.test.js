import React from 'react';
import { render, screen } from '@testing-library/react';
import MarsViewer from './MarsViewer';

test('renders Mars Rover Photos title', () => {
  render(<MarsViewer />);
  const titleElement = screen.getByText(/Mars Rover Photos/i);
  expect(titleElement).toBeInTheDocument();
});

test('shows loading when requesting', async () => {
  render(<MarsViewer />);
  expect(screen.getByText(/Loading Mars photos/i)).toBeInTheDocument();
});
