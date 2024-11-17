import { api } from 'shared/api';
import { endpoints } from './endpoints';
import { PhotoResponse } from 'shared/types';

export const PhotoApi = {
  getPhotos: async (): Promise<PhotoResponse> => {
    const { data } = await api.get<PhotoResponse>(endpoints.getPhoto());
    return data;
  },
};
