import { API_URL, baseUrl } from 'shared/consts';

export const endpoints = {
  getCollections: () => `${API_URL}/${baseUrl}/collections/featured`,
};
