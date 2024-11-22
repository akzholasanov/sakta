import React from 'react';
import { PhotoCardType } from 'shared/types';
import { PhotoCard } from 'shared/ui/photo-card';
import styles from './photo-list.module.scss';

interface PhotoListProps {
  photos: PhotoCardType[];
}

export const PhotoList = ({ photos }: PhotoListProps) => {
  return (
    <div className={styles.photo_list}>
      {photos.map(photo => (
        <PhotoCard key={photo.id} photoData={photo} />
      ))}
    </div>
  );
};
