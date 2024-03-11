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
  ) { }

  public news: Array<NewsItem> = [];

  public allPages = 0;
  public currentPage = 0;

  ngOnInit() {
    this.getNews(this.currentPage);
  }

  private getNews(page: number) {
    this.newsService.getFrontPageNews(page.toString()).pipe(
      tap((news: NewsResponse) => {
        this.currentPage = news.page;
        this.allPages = news.nbPages - 1;
      }),
      map((news: NewsResponse) => news.hits)
      ).subscribe(
      (newsItems: Array<NewsItem>) => {
        this.news = newsItems;
      }
    );
  }

  protected changePage(newPage: number) {
    this.getNews(newPage);
  }

}
