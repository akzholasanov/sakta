import { Video } from 'shared/types';
import { useQuery } from '@tanstack/react-query';

import { VideoApi } from '../api';
import { VIDEO } from '../keys';

const DEFAULT_VIDEO_RESPONSE: Video = {
  id: 0,
  width: 0,
  height: 0,
  url: '',
  image: '',
  duration: 0,
  user: {
    id: 0,
    name: '',
    url: '',
  },
  video_files: [],
  video_pictures: [],
};

export const useGetVideo = (id: number) => {
  const {
    data = DEFAULT_VIDEO_RESPONSE,
    isFetching: loading,
    error,
  } = useQuery<Video>({
    queryKey: VIDEO,
    queryFn: () => VideoApi.getVideo(id),
    enabled: !!id,
  });

  return { data, loading, error };
};
