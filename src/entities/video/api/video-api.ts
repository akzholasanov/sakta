import { api } from 'shared/api';
import { endpoints } from './endpoints';
import { VideoResponse } from 'shared/types';

export const VideoApi = {
  getVideo: async (): Promise<VideoResponse> => {
    const { data } = await api.get<VideoResponse>(endpoints.getVideo());
    return data;
  },
};
