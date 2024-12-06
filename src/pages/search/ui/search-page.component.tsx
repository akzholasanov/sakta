import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Loader } from 'shared/ui/loader';
import { PhotoList } from 'widgets/photo-list';
import { useGetSearchPhotos } from 'entities/photo/queries';
import styles from './search-page.module.scss';

export const SearchPage = () => {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const { data, loading, searchPhoto } = useGetSearchPhotos();

  useEffect(() => {
    if (query) {
      const color = searchParams.get('color') || '';
      const page = Number(searchParams.get('page')) || 1;
      const perPage = Number(searchParams.get('perPage')) || 10;

      searchPhoto(query, { color, page, perPage });
    }
  }, [query, searchParams, searchPhoto]);

  if (loading) return <Loader />;

  return (
    <section className={styles.search_page}>
      {data.total_results > 0 ? (
        <PhotoList photos={data.photos} />
      ) : (
        <p>No results found</p>
      )}
    </section>
  );
};
