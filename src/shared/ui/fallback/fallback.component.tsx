import { useNavigate } from 'react-router-dom';
import styles from './fallback.module.scss';

export const Fallback = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className={styles.fallback}>
      <span className={styles.fallback_code}>404</span>
      <p className={styles.fallback_text}>Something went wrong</p>
      <button className={styles.fallback_btn} onClick={handleRedirect}>
        Go back to home
      </button>
    </div>
  );
};
