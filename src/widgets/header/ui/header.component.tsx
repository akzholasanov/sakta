import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'shared/ui/search-bar';
// import { UserPanel } from 'widgets/user-panel';
// import { useStore } from 'features/model';
import { useDeviceType } from 'shared/hooks';
// import { Login } from 'widgets/login';

import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();

  // const { isAuthenticated, setIsAuthenticated } = useStore();

  const [search, setSearch] = useState('');
  const [color, setColor] = useState('');

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && search.trim()) {
        const basePath = `/search/${encodeURIComponent(search.trim())}`;
        const queryString = color ? `?color=${encodeURIComponent(color)}` : '';
        navigate(`${basePath}${queryString}`);
      }
    },
    [navigate, search, color],
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleSelectTag = useCallback(
    (tag: string) => {
      setSearch(tag);
      const basePath = `/search/${encodeURIComponent(tag)}`;
      const queryString = color ? `?color=${encodeURIComponent(color)}` : '';
      navigate(`${basePath}${queryString}`);
    },
    [navigate, color],
  );

  return (
    <header className={styles.header}>
      {!isMobile && (
        <div className={styles.header_logo}>
          <Link to="/">
            <span>SAKTA</span>
          </Link>
        </div>
      )}
      {!isMobile && (
        <div className={styles.header_search_bar}>
          <Search
            search={search}
            onSearch={handleSearchChange}
            onSelectTag={handleSelectTag}
            onKeyPress={handleKeyPress}
            selectedColor={color}
            setColor={setColor}
          />
        </div>
      )}
      <div className={styles.header_auth}>
        {/* {isAuthenticated ? <UserPanel /> : <Login />} */}
      </div>
    </header>
  );
};
