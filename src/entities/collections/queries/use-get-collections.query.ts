import { useQuery } from '@tanstack/react-query';
import { CollectionResponse } from 'shared/types';

import { CollectionsApi } from '../api';
import { COLLECTIONS } from '../key';

const DEFAULT_COLLECTION_RESPONSE: CollectionResponse = {
  collections: [],
  next_page: '',
  page: 1,
  per_page: 0,
  prev_page: '',
  total_results: 0,
};

export const useGetCollections = () => {
  const {
    data = DEFAULT_COLLECTION_RESPONSE,
    isFetching: loading,
    error,
  } = useQuery<CollectionResponse>({
    queryKey: COLLECTIONS,
    queryFn: CollectionsApi.getCollections,
  });

  return { data, loading, error };
};
