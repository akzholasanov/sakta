import { useCallback, useState } from 'react';
import { Tabs } from 'widgets/tabs';
import { PhotoList } from 'widgets/photo-list';
import { useGetPhotos } from 'entities/photo/queries';
import { CollectionList } from 'widgets/collection-list';
import { useGetCollections } from 'entities/collections/queries';

import styles from './home-page.module.scss';

export const HomePage = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPhotos();
  const { data: collections } = useGetCollections();
  const photos =
    data?.pages.flatMap((page, pageIndex) =>
      page.photos.map(photo => ({ ...photo, _pageIndex: pageIndex })),
    ) || [];

  const [activeTab, setActiveTab] = useState('for-you');

  const handleChangeTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <section className={styles.home}>
      <div className={styles.tabs}>
        <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
      </div>
      {activeTab === 'for-you' ? (
        <PhotoList
          photos={photos}
          fetchMore={fetchNextPage}
          hasMore={hasNextPage}
          isLoading={isLoading || isFetchingNextPage}
        />
      ) : (
        <CollectionList collections={collections?.collections} />
      )}
    </section>
  );
};
