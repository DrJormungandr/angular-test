import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { ShortUrlPipe } from './pipes/short-url.pipe';
import { HumanReadablePageNumberPipe } from './pipes/human-readable-page-number.pipe';
import { StoryComponent } from './story/story.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';


@NgModule({
  declarations: [
    NewsComponent,
    StoryComponent,
    ShortUrlPipe,
    HumanReadablePageNumberPipe,
    TimestampToDatePipe,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
  ],
})
export class NewsModule { }
