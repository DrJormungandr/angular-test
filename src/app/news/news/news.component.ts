import { ActivatedRoute, ParamMap} from '@angular/router';
import { NewsItem } from '../models/news-item';
import { NewsResponse } from '../models/news-response';
import { NewsService } from '../services/news.service';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  public news: Array<NewsItem> = [];

  public allPages = 0;
  public currentPage = 0;

  ngOnInit() {
    this.route.paramMap.pipe(
      tap((params: ParamMap) => {
        this.currentPage = + params.get('pageNumber') || 1;
        this.getNews(this.currentPage - 1);
      })
    ).subscribe();

  }

  private getNews(page: number) {
    this.newsService.getFrontPageNews(page.toString()).pipe(
      tap((news: NewsResponse) => {
        this.allPages = news.nbPages;
      }),
      map((news: NewsResponse) => news.hits)
      ).subscribe(
      (newsItems: Array<NewsItem>) => {
        this.news = newsItems;
      }
    );
  }
}
