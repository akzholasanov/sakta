import React from 'react';
import styles from './home-page.module.scss';
import { useGetPhotos } from 'entities/photo/queries';
import { PhotoList } from 'widgets/photo-list';
import { useGetVideos } from 'entities/video/queries';
import { Tabs } from 'widgets/tabs';
// import { Slider } from 'shared/ui/slider';

export const HomePage = () => {
  const { data } = useGetPhotos();
  // const { data: videos } = useGetVideos();

  return (
    <section className={styles.home}>
      {/* <Slider videos={videos?.videos} /> */}
      <div className={styles.tabs}>
        <Tabs />
      </div>
      <PhotoList photos={data.photos} />
    </section>
  );
};
