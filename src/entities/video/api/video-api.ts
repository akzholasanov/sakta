import { api } from 'shared/api';
import { Video, VideoResponse } from 'shared/types';

import { endpoints } from './endpoints';

export const VideoApi = {
  getVideos: async (): Promise<VideoResponse> => {
    const { data } = await api.get<VideoResponse>(endpoints.getVideos());
    return data;
  },

  getVideo: async (id: number): Promise<Video> => {
    const { data } = await api.get<Video>(endpoints.getVideo(id));
    return data;
  },
};
