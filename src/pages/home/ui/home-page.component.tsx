import React from 'react';
import styles from './home-page.module.scss';
import { useGetPhotos } from 'entities/photo/queries';
import { PhotoCard } from 'shared/ui/photo-card';

export const HomePage = () => {
  const { data } = useGetPhotos();

  return (
    <section className={styles.home}>
      <div className={styles.home_photos_list}>
        {data &&
          data?.photos.map(photo => (
            <PhotoCard key={photo.id} photoData={photo} />
          ))}
      </div>
    </section>
  );
};
