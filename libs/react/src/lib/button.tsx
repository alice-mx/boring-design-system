import React from 'react';

import './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  disabled?: boolean;
}

export const Button = ({ text, disabled = false }) => {
  return (
    <input
      className="bd-button"
      type="button"
      value={text}
      disabled={disabled}
    />
  );
};

export default Button;
