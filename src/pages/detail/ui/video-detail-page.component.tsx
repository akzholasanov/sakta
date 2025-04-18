import { Loader } from 'shared/ui/loader';
import { IoIosArrowBack } from 'react-icons/io';
import { useGetVideo } from 'entities/video/queries';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './detail-page.module.scss';

export const VideoDetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useGetVideo(Number(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <Loader />;

  return (
    <section className={styles.detail_page}>
      <button className={styles.close} onClick={handleBack}>
        <IoIosArrowBack size={16} color="#727170" />
      </button>
      <div className={styles.detail_page_info}>
        <div className={styles.image}>
          <video
            src={data.video_files[0].link}
            poster={data.image}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controls={false}
            className={styles.video_player}
          />
        </div>
        <div className={styles.aside}>
          <h1>{data.user.name}</h1>
          <div className={styles.pictures}>
            {data.video_pictures.map(picture => (
              <img
                key={picture.nr}
                src={picture.picture}
                alt={`picture-${picture.nr}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
