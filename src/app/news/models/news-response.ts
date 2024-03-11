import { NewsItem } from "./news-item";

export interface NewsResponse {
  hits: Array<NewsItem>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
}
