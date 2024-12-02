import { useCallback, useState } from 'react';
import { PhotoResponse } from 'shared/types';
import { useQuery } from '@tanstack/react-query';
import { PhotoApi } from '../api';
import { PHOTO_SEARCH } from '../keys/keys';

export const useGetSearchPhotos = () => {
  const [params, setParams] = useState({
    query: '',
    perPage: 10,
    page: 1,
    orientation: '',
  });

  const {
    data = {} as PhotoResponse,
    isFetching: loading,
    error,
  } = useQuery<PhotoResponse>({
    queryKey: [PHOTO_SEARCH, params],
    queryFn: () => PhotoApi.getSearchPhotos(params),
    enabled: !!params.query,
  });

  const searchPhoto = useCallback(
    (
      query: string,
      perPage: number = 10,
      page: number = 1,
      orientation: string = '',
    ) => {
      setParams({ query, perPage, page, orientation });
    },
    [],
  );

  return { data, loading, error, searchPhoto };
};
