import React from 'react';
import styles from './photo-card.module.scss';
import { PhotoCardType } from 'shared/types';
import { generateGridSpan } from 'shared/helpers';

interface PhotoCardProps {
  photoData: PhotoCardType;
}

export const PhotoCard = ({ photoData }: PhotoCardProps) => {
  const span = generateGridSpan(15, 30);
  return (
    <div
      className={styles.card}
      style={{ '--card-span': span } as React.CSSProperties}
    >
      <div className={styles.card_image}>
        <img src={photoData.src.medium} alt={photoData.alt} loading='lazy' />
      </div>
    </div>
  );
};
