import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

describe(' React', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button text="Click me!" />);
    expect(baseElement).toBeTruthy();
  });
});
