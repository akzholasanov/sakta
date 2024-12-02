import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'shared/ui/loader';
import { PhotoList } from 'widgets/photo-list';
import { useGetSearchPhotos } from 'entities/photo/queries';
import styles from './search-page.module.scss';

export const SearchPage = () => {
  const { query } = useParams();
  const { data, loading, searchPhoto } = useGetSearchPhotos();

  useEffect(() => {
    if (query) {
      searchPhoto(query);
    }
  }, [query, searchPhoto]);

  if (loading) return <Loader />;

  return (
    <section className={styles.search_page}>
      {data.total_results > 0 && <PhotoList photos={data.photos} />}
    </section>
  );
};
