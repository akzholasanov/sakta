import { HomePicture } from './home-picture.component';
import { DATA } from './consts';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      {DATA.map((item, index) => (
        <HomePicture key={index} data={item} />
      ))}
    </div>
  );
};
