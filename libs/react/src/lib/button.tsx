import React from 'react';

import './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
}

export const Button = ({ text }) => {
  return <input type="button" value={text} />;
};

export default Button;
