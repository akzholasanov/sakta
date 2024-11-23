import clsx from 'clsx';
import styles from './tab.module.scss';

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
