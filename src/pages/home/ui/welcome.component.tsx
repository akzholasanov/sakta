import clsx from 'clsx';
import styles from './welcome.module.scss';

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={clsx(styles.welcome_main_screen, styles.screen)}>
        <h1>Made for Creatives</h1>
        <p>Browse and save curated inspiration from all over the world.</p>
        <button>Get Started</button>
      </div>
      <div className={clsx(styles.welcome_intro_screen, styles.screen)}>
        <div className={styles.welcome_intro_screen_pictures}>
          <div className={styles.card}>
            <div className={styles.content}>
              <h2>See it, make it, try it, do it</h2>
              <p>
                The best part of Sakta is discovering new things and ideas from
                people around the world.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.welcome_intro_screen_text}>
          <h2>Search for an idea</h2>
          <p>
            What do you want to try next? Think of something you’re into—like
            “new look outfit”—and see what you find.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className={clsx(styles.welcome_join_screen, styles.screen)}>
        <div className={styles.welcome_join_screen_img}></div>
        <div className={styles.welcome_join_screen_form}>
          <h2>Join the community</h2>
          <p>Sign up now and get full access to our app.</p>
          <form>
            <input type="text" placeholder="Email" />
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};
