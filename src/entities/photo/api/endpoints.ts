import { API_URL, baseUrl } from 'shared/consts';

export const endpoints = {
  getPhotos: () => `${API_URL}/${baseUrl}/curated`,
  getPhoto: (id: number) => `${API_URL}/${baseUrl}/photos/${id}`,
};
