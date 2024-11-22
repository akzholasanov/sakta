export interface VideoFile {
  id: number;
  quality: 'hd' | 'sd' | 'hls';
  file_type: string;
  width: number | null;
  height: number | null;
  link: string;
}

export interface VideoPicture {
  id: number;
  picture: string;
  nr: number;
}

export interface VideoUser {
  id: number;
  name: string;
  url: string;
}

export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: VideoUser;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
}
export interface VideoResponse {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
}
