import React from 'react';
import { render } from '@testing-library/react';
import MyMap from '../MapComponents/MyMap';
  
  test('MyMap renders without crashing', () => {
    render(<MyMap />);
  });