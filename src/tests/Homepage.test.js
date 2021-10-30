import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../Common/Homepage';

test('renders without crashing', () => {
  render(<Homepage />);
});
