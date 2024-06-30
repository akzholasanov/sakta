import styles from './header.module.scss';

export const Header = () => {
  return (
    <header>
      <nav className={styles.header_nav}>
        <ul>
          <li>Home</li>
          <li>About us</li>
        </ul>
      </nav>
      <div className={styles.header_buttons}>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};
