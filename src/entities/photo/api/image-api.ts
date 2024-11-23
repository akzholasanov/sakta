import { api } from 'shared/api';
import { PhotoResponse } from 'shared/types';
import { endpoints } from './endpoints';

export const PhotoApi = {
  getPhotos: async (): Promise<PhotoResponse> => {
    const { data } = await api.get<PhotoResponse>(endpoints.getPhoto());
    return data;
  },
};
