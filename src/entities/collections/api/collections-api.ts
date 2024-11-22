import { api } from 'shared/api';
import { endpoints } from './endpoints';
import { CollectionResponse } from 'shared/types';

export const CollectionsApi = {
  getCollections: async (): Promise<CollectionResponse> => {
    const { data } = await api.get<CollectionResponse>(endpoints.getCollections());
    return data;
  },
};
