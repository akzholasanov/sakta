import React from 'react';
import styles from './photo-card.module.scss';
import { PhotoCardType } from 'shared/types';

interface PhotoCardProps {
  photoData: PhotoCardType;
}

export const PhotoCard = ({ photoData }: PhotoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={photoData.src.original} alt={photoData.alt} />
      </div>
    </div>
  );
};
