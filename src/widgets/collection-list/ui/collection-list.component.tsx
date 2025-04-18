import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Masonry } from 'masonic';
import { useDeviceType } from 'shared/hooks';
import { CollectionType } from 'shared/types';
import { PhotoCard } from 'shared/ui/photo-card';
import { VideoCard } from 'shared/ui/video-card';
import { useGetCollectionDetail } from 'entities/collections/queries';

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
  const { isMobile } = useDeviceType();

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
          <Masonry
            key={selectedCollectionId || 'default'}
            items={collection?.media ?? []}
            render={({ data }) =>
              data.type === 'Photo' ? (
                <PhotoCard photoData={data} />
              ) : (
                <VideoCard videoData={data} />
              )
            }
            columnGutter={isMobile ? 24 : 42}
            rowGutter={0}
            columnCount={isMobile ? 2 : undefined}
          />
        </div>
      </div>
    </div>
  );
};
