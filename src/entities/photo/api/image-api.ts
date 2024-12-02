import { api } from 'shared/api';
import { PhotoCardType, PhotoResponse } from 'shared/types';
import { endpoints } from './endpoints';
import { buildQueryParams } from 'shared/helpers';

export const PhotoApi = {
  getPhotos: async (): Promise<PhotoResponse> => {
    const { data } = await api.get<PhotoResponse>(endpoints.getPhotos());
    return data;
  },

  getPhoto: async (id: number): Promise<PhotoCardType> => {
    const { data } = await api.get<PhotoCardType>(endpoints.getPhoto(id));
    return data;
  },

  getSearchPhotos: async <T extends Record<string, any>>(params: T): Promise<PhotoResponse> => {
    const queryString = buildQueryParams(params);
    const { data } = await api.get<PhotoResponse>(endpoints.getSearchPhotos(queryString));
    return data;
  },
};
