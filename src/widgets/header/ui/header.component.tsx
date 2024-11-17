import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <span>SAKTA</span>
      </div>
      <div className={styles.header_search_bar}>
        <input type='text' placeholder='Search'/>
      </div>
      <div className={styles.header_auth}>
        <button>Sign in</button>
        <button>Log in</button>
      </div>
    </header>
  );
};
