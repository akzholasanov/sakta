import { api } from 'shared/api';
import { buildQueryParams } from 'shared/helpers';
import { PhotoCardType, PhotoResponse } from 'shared/types';

import { endpoints } from './endpoints';

export const PhotoApi = {
  getPhotos: async ({ page = 1 }: { page: number }): Promise<PhotoResponse> => {
    const { data } = await api.get<PhotoResponse>(endpoints.getPhotos(), {
      params: { page },
    });
    return data;
  },

  getPhoto: async (id: number): Promise<PhotoCardType> => {
    const { data } = await api.get<PhotoCardType>(endpoints.getPhoto(id));
    return data;
  },

  getSearchPhotos: async <T extends Record<string, unknown>>(
    params: T,
  ): Promise<PhotoResponse> => {
    const queryString = buildQueryParams(params);
    const { data } = await api.get<PhotoResponse>(
      endpoints.getSearchPhotos(queryString),
    );
    return data;
  },
};
