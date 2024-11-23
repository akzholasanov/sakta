import { api } from 'shared/api';
import { VideoResponse } from 'shared/types';
import { endpoints } from './endpoints';

export const VideoApi = {
  getVideo: async (): Promise<VideoResponse> => {
    const { data } = await api.get<VideoResponse>(endpoints.getVideo());
    return data;
  },
};
