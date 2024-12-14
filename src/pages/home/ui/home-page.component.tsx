import { useCallback, useState } from 'react';
import { Tabs } from 'widgets/tabs';
import { Loader } from 'shared/ui/loader';
import { PhotoList } from 'widgets/photo-list';
import { useGetPhotos } from 'entities/photo/queries';
import { CollectionList } from 'widgets/collection-list';
import { useGetCollections } from 'entities/collections/queries';
// import { Slider } from 'shared/ui/slider';
import styles from './home-page.module.scss';

export const HomePage = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPhotos();
  const { data: collections, loading: loadingCollections } =
    useGetCollections();
  const photos = data?.pages.flatMap(page => page.photos) || [];

  const [activeTab, setActiveTab] = useState('for-you');

  const handleChangeTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  if (isLoading || loadingCollections) return <Loader />;

  return (
    <section className={styles.home}>
      {/* <Slider videos={videos?.videos} /> */}
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
        <CollectionList collections={collections.collections} />
      )}
      {isLoading ? <Loader /> : null}
    </section>
  );
};
