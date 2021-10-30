import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../Common/UserProfile';

test('renders without crashing', () => {
  render(<UserProfile />);
});
