import { Welcome } from './welcome.component';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Welcome />
    </div>
  );
};
