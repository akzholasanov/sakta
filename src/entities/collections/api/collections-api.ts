import { api } from 'shared/api';
import { endpoints } from './endpoints';
import { PhotoResponse } from 'shared/types';

export const CollectionsApi = {
  getPhotos: async (): Promise<PhotoResponse> => {
    const { data } = await api.get<PhotoResponse>(endpoints.getCollections());
    return data;
  },
};
