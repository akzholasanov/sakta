import { API_URL } from 'shared/consts';

export const endpoints = {
  getVideos: () => `${API_URL}/videos/popular`,
  getVideo: (id: number) => `${API_URL}/videos/videos/${id}`,
};
