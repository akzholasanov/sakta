import React from 'react';
import styles from './header.module.scss';
import { UserPanel } from 'widgets/user-panel';
import { SearchBar } from 'shared/ui/search-bar';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <span>SAKTA</span>
      </div>
      <div className={styles.header_search_bar}>
        <SearchBar />
      </div>
      <div className={styles.header_auth}>
        <UserPanel />
      </div>
    </header>
  );
};
