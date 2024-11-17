import { useQuery } from '@tanstack/react-query';
import { PHOTOS } from '../keys/keys';
import { PhotoApi } from '../api';
import { PhotoResponse } from 'shared/types/photo-card.type';

const DEFAULT_PHOTO_RESPONSE: PhotoResponse = {
  photos: [],
  next_page: '',
  page: 1,
  per_page: 0,
  prev_page: '',
  total_results: 0,
};

export const useGetPhotos = () => {
  const { data = DEFAULT_PHOTO_RESPONSE, isFetching: loading, error } = useQuery<PhotoResponse>({
    queryKey: PHOTOS,
    queryFn: PhotoApi.getPhotos,
  });

  return { data, loading, error };
};
