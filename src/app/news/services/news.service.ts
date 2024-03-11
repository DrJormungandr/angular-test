import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news-response';
import { StoryResponse } from '../models/story-response';

@Injectable()
export class NewsService {

constructor(
  private httpClient: HttpClient
) { }

  public getFrontPageNews(page: string): Observable<NewsResponse> {
    const url = environment.apiUrl + "search";
    const params = new HttpParams({fromObject: {tags: "front_page", page}});
    return this.httpClient.get<NewsResponse>(url, {params});
  }

  public getStory(id: string): Observable<StoryResponse> {
    const url = environment.apiUrl + `items/${id}`;
    const params = new HttpParams();
    return this.httpClient.get<StoryResponse>(url, {params});
  }

}
