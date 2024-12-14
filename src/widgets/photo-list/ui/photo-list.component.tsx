import { PhotoCardType } from 'shared/types';
import { PhotoCard } from 'shared/ui/photo-card';
import { useInfiniteListRef } from 'shared/hooks';
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

  return (
    <div className={styles.photo_list}>
      {photos.map(photo => (
        <PhotoCard key={photo.id} photoData={photo} />
      ))}
      <div ref={lastListItemRef} />
    </div>
  );
};
