import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';
type ButtonProps = {
  children: ReactNode;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  props?: HTMLButtonElement;
};

const Button = ({
  children,
  label,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      aria-label={label}
      {...props}
      className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
