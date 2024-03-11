export interface StoryResponse {
  author: string;
  children: Array<StoryResponse>;
  created_at: string;
  created_at_i: number;
  id: number;
  parent_id: number;
  points: number;
  story_id: number;
  text: string;
  title: string;
  type: "story" | "comment";
  url: string;
}
