import { api } from 'shared/api';
import { CollectionDetailResponse, CollectionResponse } from 'shared/types';

import { endpoints } from './endpoints';

export const CollectionsApi = {
  getCollections: async (): Promise<CollectionResponse> => {
    const { data } = await api.get<CollectionResponse>(
      endpoints.getCollections(),
    );
    return data;
  },

  getCollectionDetail: async (id: string) => {
    const { data } = await api.get<CollectionDetailResponse>(
      endpoints.getCollectionDetail(id),
    );
    return data;
  },
};
