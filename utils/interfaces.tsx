export interface Photo {
  url: string;
  date: string;
  title: string;
  explanation: string;
  liked: boolean;
  media_type: string;
  thumbnail_url: string
}

export type ListAction = "Liked" | "UnLiked";