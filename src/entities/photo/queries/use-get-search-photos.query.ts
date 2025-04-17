import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { PhotoResponse } from 'shared/types';

import { PhotoApi } from '../api';
import { PHOTO_SEARCH } from '../keys/keys';

interface SearchParams {
  query: string;
  perPage?: number;
  page?: number;
  orientation?: string;
  color?: string;
}

export const useGetSearchPhotos = () => {
  const [params, setParams] = useState<SearchParams>({ query: '' });

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
    (query: string, options: Omit<SearchParams, 'query'> = {}) => {
      setParams({ query, ...options });
    },
    [],
  );

  return { data, loading, error, searchPhoto };
};
