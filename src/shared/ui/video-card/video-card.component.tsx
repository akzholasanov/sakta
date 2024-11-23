import React from 'react';
import { VideoCollection } from 'shared/types';
import { generateGridSpan } from 'shared/helpers';
import styles from './video-card.module.scss';

interface VideoCardProps {
  videoData: VideoCollection;
}

export const VideoCard = ({ videoData }: VideoCardProps) => {
  const span = generateGridSpan(20, 25);

  const videoFile = videoData.video_files?.[0];

  if (!videoFile) {
    return (
      <div className={styles.card}>
        <p className={styles.error}>No video file available</p>
      </div>
    );
  }

  return (
    <div
      className={styles.card}
      style={{ '--card-span': span } as React.CSSProperties}
    >
      <div className={styles.card_video}>
        <video
          src={videoFile.link}
          poster={videoData.image}
          autoPlay
          loop
          muted
          className={styles.video_player}
        />
      </div>
    </div>
  );
};
