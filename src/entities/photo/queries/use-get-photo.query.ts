import { useQuery } from '@tanstack/react-query';
import { PhotoCardType } from 'shared/types';

import { PhotoApi } from '../api';
import { PHOTO } from '../keys';

export const useGetPhoto = (id: number) => {
  const {
    data = {} as PhotoCardType,
    isFetching: loading,
    error,
  } = useQuery<PhotoCardType>({
    queryKey: [PHOTO, id],
    queryFn: () => PhotoApi.getPhoto(id),
    enabled: !!id,
  });

  return { data, loading, error };
};
