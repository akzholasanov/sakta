import { useNavigate } from 'react-router-dom';
import { PhotoCardType } from 'shared/types';

import styles from './photo-card.module.scss';

interface PhotoCardProps {
  photoData: PhotoCardType;
}

export const PhotoCard = ({ photoData }: PhotoCardProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/photo/${photoData.id}`);
  };

  return (
    <div className={styles.card} onClick={handleNavigateToDetail}>
      {/* <button className={styles.card_save}>Save</button> */}
      <div className={styles.card_image}>
        <img src={photoData.src.medium} alt={photoData.alt} loading="lazy" />
      </div>
      <button className={styles.card_info}>{photoData.photographer}</button>
    </div>
  );
};
