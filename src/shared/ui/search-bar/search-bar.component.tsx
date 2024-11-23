import { Input } from 'antd';
import styles from './search-bar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <Input
        type="text"
        name="text"
        placeholder="Search 'UIverse'"
        className={styles.search_bar_input}
      />
    </div>
  );
};
