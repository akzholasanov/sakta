import React from 'react';
import styles from './tab.module.scss';
import clsx from 'clsx';

interface TabProps {
  label: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Tab = ({ label, active, className, onClick }: TabProps) => {
  return (
    <span
      data-testid={styles.tab}
      className={clsx(styles.tab, className, { [styles.active]: active })}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
