import React from 'react';
import { render } from '@testing-library/react';
import PostForm from '../Feed/PostForm';

test('renders without crashing', () => {
  render(<PostForm />);
});