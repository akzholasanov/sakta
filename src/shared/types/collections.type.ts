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
