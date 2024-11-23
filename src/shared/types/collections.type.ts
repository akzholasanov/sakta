import { PhotoCardType } from './photo-card.type';
import { VideoFile, VideoPicture, VideoUser } from './video.type';

export type CollectionType = {
  id: string;
  title: string;
  description: string;
  private: boolean;
  media_count: number;
  photos_count: number;
  videos_count: number;
};

export type CollectionResponse = {
  collections: CollectionType[];
  page: number;
  per_page: number;
  total_results: number;
  next_page: string;
  prev_page: string;
};

export type VideoCollection = {
  avg_color: string;
  duration: number;
  height: number;
  id: number;
  image: string;
  tags: [];
  type: string;
  url: string;
  user: VideoUser;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
  width: number;
};

export type Media =
  | (PhotoCardType & { type: 'Photo' })
  | (VideoCollection & { type: 'Video' });

export type CollectionDetailResponse = {
  id: string;
  media: Media[];
  page: number;
  per_page: number;
  total_results: number;
  next_page: string | null;
  prev_page: string | null;
};
