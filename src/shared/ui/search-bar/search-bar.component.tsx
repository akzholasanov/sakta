import { Input } from 'antd';
import styles from './search-bar.module.scss';

interface SearchBarProps {
  search: string;
  onFocus: () => void;
  onSearch: (value: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  onSearch,
  search,
  onKeyPress,
  onFocus,
}: SearchBarProps) => {
  return (
    <div className={styles.search_bar}>
      <Input
        name="text"
        type="text"
        value={search}
        autoComplete="off"
        placeholder="Search 'Sakta'"
        className={styles.search_bar_input}
        onFocus={onFocus}
        onKeyDown={onKeyPress}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};
