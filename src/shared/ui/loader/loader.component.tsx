import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.progress}></div>
      <div className={styles.progress}></div>
      <div className={styles.progress}></div>
    </div>
  );
};
