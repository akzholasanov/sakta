import { useInfiniteQuery } from '@tanstack/react-query';
import { PhotoResponse } from 'shared/types/photo-card.type';

import { PhotoApi } from '../api';
import { PHOTOS } from '../keys/keys';

export const useGetPhotos = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<PhotoResponse, Error>({
    queryKey: PHOTOS,
    queryFn: async ({ pageParam = 1 }) =>
      PhotoApi.getPhotos({ page: pageParam as number }),
    getNextPageParam: lastPage => {
      return lastPage.page <
        Math.ceil(lastPage.total_results / lastPage.per_page)
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
};
