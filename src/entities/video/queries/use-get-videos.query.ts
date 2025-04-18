import { useQuery } from '@tanstack/react-query';
import { VideoResponse } from 'shared/types';

import { VideoApi } from '../api';
import { VIDEOS } from '../keys';

const DEFAULT_PHOTO_RESPONSE: VideoResponse = {
  page: 0,
  per_page: 0,
  total_results: 0,
  url: '',
  videos: [],
};

export const useGetVideos = () => {
  const {
    data = DEFAULT_PHOTO_RESPONSE,
    isFetching: loading,
    error,
  } = useQuery<VideoResponse>({
    queryKey: VIDEOS,
    queryFn: VideoApi.getVideos,
  });

  return { data, loading, error };
};
