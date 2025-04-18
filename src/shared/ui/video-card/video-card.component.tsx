import { VideoCollection } from 'shared/types';
import { useNavigate } from 'react-router-dom';

import styles from './video-card.module.scss';

interface VideoCardProps {
  videoData: VideoCollection;
}

export const VideoCard = ({ videoData }: VideoCardProps) => {
  const videoFile = videoData.video_files?.[0];
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/videos/${videoData.id}`);
  };

  if (!videoFile) {
    return (
      <div className={styles.card}>
        <p className={styles.error}>No video file available</p>
      </div>
    );
  }

  return (
    <div className={styles.card} onClick={handleNavigateToDetail}>
      <div className={styles.card_video}>
        <video
          src={videoFile.link}
          poster={videoData.image}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          className={styles.video_player}
        />
      </div>
    </div>
  );
};
