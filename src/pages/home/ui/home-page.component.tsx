import { useCallback } from 'react';
import { Tabs } from 'widgets/tabs';
import { IoIosArrowUp } from 'react-icons/io';
import { PhotoList } from 'widgets/photo-list';
import { useSearchParams } from 'react-router-dom';
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
    ) ?? [];

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'collections' ? 'collections' : 'for-you'; // default to 'for-you'
  const handleChangeTab = useCallback((tabId: string) => {
    setSearchParams({ tab: tabId });
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
      <button
        className={styles.back_to_top}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IoIosArrowUp size={16} color="#727170" />
      </button>
    </section>
  );
};
