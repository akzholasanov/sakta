import { PEXEL_API_URL } from 'shared/consts';

export const endpoints = {
  getPhoto: () => `${PEXEL_API_URL}/curated?page=2&per_page=40`,
};
