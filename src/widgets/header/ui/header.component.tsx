import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'shared/ui/search-bar';
import { UserPanel } from 'widgets/user-panel';
import styles from './header.module.scss';

export const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && search.trim()) {
        navigate(`/search/${encodeURIComponent(search.trim())}`);
      }
    },
    [navigate, search],
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleSelectTag = useCallback((tag: string) => {
    setSearch(tag);
    navigate(`/search/${encodeURIComponent(tag)}`);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to="/">
          <span>SAKTA</span>
        </Link>
      </div>
      <div className={styles.header_search_bar}>
        <Search
          search={search}
          onSearch={handleSearchChange}
          onSelectTag={handleSelectTag}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={styles.header_auth}>
        <UserPanel />
      </div>
    </header>
  );
};
