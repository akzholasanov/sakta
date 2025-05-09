import { Popover } from 'antd';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import { colors, trendingTags } from './consts';
import styles from './search.module.scss';
import { SearchBar } from './search-bar.component';

interface SearchProps {
  search: string;
  selectedColor: string;
  setColor: (color: string) => void;
  onSearch: (value: string) => void;
  onSelectTag: (tag: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search = ({
  search,
  selectedColor,
  setColor,
  onSearch,
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
            <button
              key={color}
              onClick={() => setColor(color)}
              className={clsx({
                [styles.selected_color]: selectedColor === color,
              })}
            >
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
