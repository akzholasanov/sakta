import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  isLoading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  label,
  isLoading = false,
  className,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className, {
        [styles.loading]: isLoading,
        [styles.disabled]: disabled || isLoading,
      })}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        label
      )}
    </button>
  );
};
