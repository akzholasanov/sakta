import { Masonry } from 'masonic';
import { Loader } from 'shared/ui/loader';
import { PhotoCardType } from 'shared/types';
import { PhotoCard } from 'shared/ui/photo-card';
import { useDeviceType, useInfiniteListRef } from 'shared/hooks';

import styles from './photo-list.module.scss';

interface PhotoListProps {
  photos: PhotoCardType[];
  hasMore?: boolean;
  fetchMore?: () => void;
  isLoading?: boolean;
}

export const PhotoList = ({
  photos,
  hasMore,
  fetchMore,
  isLoading,
}: PhotoListProps) => {
  const lastListItemRef = useInfiniteListRef(hasMore, fetchMore, isLoading);
  const { isMobile } = useDeviceType();

  return (
    <div className={styles.photo_list}>
      <Masonry
        items={photos}
        render={({ data }) => <PhotoCard photoData={data} />}
        columnGutter={isMobile ? 24 : 42}
        rowGutter={0}
        columnCount={isMobile ? 2 : undefined}
      />
      <div ref={lastListItemRef} />
      {(isLoading || !photos || photos.length === 0) && <Loader />}
    </div>
  );
};
