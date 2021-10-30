import React from 'react';
import { render } from '@testing-library/react';
import EventFeed from '../Feed/EventFeed';

test('renders without crashing', () => {
  render(<EventFeed />);
});