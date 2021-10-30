import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Auth/Login';

test('renders without crashing', () => {
  render(<Login />);
});