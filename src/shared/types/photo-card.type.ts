export interface PhotoCardType {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  url: string;
  width: number;
}

export interface PhotoResponse {
  next_page: string;
  page: number;
  per_page: number;
  photos: PhotoCardType[];
  prev_page: string;
  total_results: number;
}
