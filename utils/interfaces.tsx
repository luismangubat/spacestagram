export interface Photo {
  url: string;
  date: string;
  title: string;
  explanation: string;
  liked: boolean;
  media_type: string;
  thumbnail_url: string;
}

export interface LikedList {
  [url: string]: Photo;
}

export type ListAction = "Liked" | "UnLiked";