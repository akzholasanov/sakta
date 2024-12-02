import { useState, useEffect, useRef } from 'react';
import { Popover } from 'antd';
import { GoArrowUpRight } from 'react-icons/go';
import { SearchBar } from './search-bar.component';
import styles from './search.module.scss';
import { colors, trendingTags } from './consts';

interface SearchProps {
  search: string;
  onSearch: (value: string) => void;
  onSelectTag: (tag: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search = ({
  onSearch,
  search,
  onKeyPress,
  onSelectTag,
}: SearchProps) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectTag = (value: string) => {
    onSelectTag(value);
    setOpen(false);
  };

  const content = (
    <div className={styles.suggestions} ref={popoverRef}>
      <div className={styles.block}>
        <p>Trending</p>
        <div className={styles.list}>
          {trendingTags.map(tag => (
            <button key={tag} onClick={() => handleSelectTag(tag)}>
              <GoArrowUpRight />
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.block}>
        <p>Colors</p>
        <div className={styles.list}>
          {colors.map(color => (
            <button key={color} onClick={() => handleSelectTag(color)}>
              <small style={{ backgroundColor: color }}></small>
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      placement="bottom"
      open={open}
      onOpenChange={setOpen}
      overlayClassName={styles.custom_search_popover}
    >
      <SearchBar
        search={search}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onFocus={() => setOpen(true)}
      />
    </Popover>
  );
};
