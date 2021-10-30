import React from 'react';
import { render } from '@testing-library/react';
import Signup from '../Auth/Signup';

test('renders without crashing', () => {
  render(<Signup />);
});