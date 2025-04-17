import clsx from 'clsx';
import { useGetCollectionDetail } from 'entities/collections/queries';
import { useEffect, useState } from 'react';
import { CollectionType } from 'shared/types';
import { PhotoCard } from 'shared/ui/photo-card';
import { VideoCard } from 'shared/ui/video-card';

import styles from './collection-list.module.scss';

interface CollectionListProps {
  collections: CollectionType[];
}

export const CollectionList = ({ collections }: CollectionListProps) => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    string | null
  >(null);
  const { data: collection } = useGetCollectionDetail(
    selectedCollectionId || '',
  );

  useEffect(() => {
    if (collections.length > 0) {
      setSelectedCollectionId(collections[0].id);
    }
  }, [collections]);

  const handleGetCollection = (id: string) => setSelectedCollectionId(id);

  return (
    <div className={styles.collection_list}>
      <div className={styles.list}>
        {collections.map(({ id, title }) => (
          <span
            key={id}
            onClick={() => handleGetCollection(id)}
            className={clsx(styles.collection_item, {
              [styles.active]: selectedCollectionId === id,
            })}
          >
            {title}
          </span>
        ))}
      </div>

      <div className={styles.collection_detail}>
        <p className={styles.collection_title}>Elements</p>
        <div className={styles.collection_media}>
          {collection?.media.map(item =>
            item.type === 'Photo' ? (
              <PhotoCard key={item.id} photoData={item} />
            ) : (
              <VideoCard key={item.id} videoData={item} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
