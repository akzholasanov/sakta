import { useQuery } from '@tanstack/react-query';
import { CollectionDetailResponse } from 'shared/types';
import { CollectionsApi } from '../api';
import { COLLECTION_DETAIL } from '../key';

export const useGetCollectionDetail = (id: string) => {
  const {
    data,
    isFetching: loading,
    error,
  } = useQuery<CollectionDetailResponse>({
    queryKey: [COLLECTION_DETAIL, id],
    queryFn: () => CollectionsApi.getCollectionDetail(id),
    enabled: !!id,
  });

  return { data, loading, error };
};
