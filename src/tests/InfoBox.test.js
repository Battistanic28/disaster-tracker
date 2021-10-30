import React from 'react';
import { render } from '@testing-library/react';
import InfoBox from '../MapComponents/InfoBox';
  
  test('renders without crashing', () => {
    render(<InfoBox />);
  });