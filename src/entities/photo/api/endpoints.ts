import { API_URL, baseUrl } from 'shared/consts';

export const endpoints = {
  getPhoto: () => `${API_URL}/${baseUrl}/curated`,
};
