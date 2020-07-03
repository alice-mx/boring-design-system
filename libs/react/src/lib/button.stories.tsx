import React from 'react';
import { Button } from './button';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  component: React,
  title: 'React',
  decorators: [withKnobs],
};

export const primary = () => {
  return (
    <Button text="I am the button" disabled={boolean('Disabled', false)} />
  );
};
