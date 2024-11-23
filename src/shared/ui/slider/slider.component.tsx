import { Carousel } from 'antd';
import { Video } from 'shared/types';
import styles from './slider.module.scss';

interface SliderProps {
  videos: Video[];
}

const getMediumQualityVideo = (videoFiles: Video['video_files']) => {
  if (!videoFiles || videoFiles.length === 0) return null;

  const mediumQualityFile =
    videoFiles.find(file => file.quality === 'sd') ||
    videoFiles.find(file => file.quality === 'hd');

  return mediumQualityFile || null;
};

export const Slider = ({ videos }: SliderProps) => {
  const filteredVideos = videos
    .map(video => getMediumQualityVideo(video.video_files))
    .filter(Boolean);

  return (
    <Carousel autoplay autoplaySpeed={10000} className={styles.slider}>
      {filteredVideos.map(file => (
        <div key={file!.id} className={styles.slide}>
          <video controls autoPlay muted loop>
            <source src={file!.link} type={file!.file_type} />
          </video>
        </div>
      ))}
    </Carousel>
  );
};
