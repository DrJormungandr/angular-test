import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { StoryResponse } from '../models/story-response';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class StoryComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  public story: StoryResponse;

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('storyId');
    this.newsService.getStory(id).subscribe(
      (response: StoryResponse) => {
        this.story = response;
      }
    );
  }

}
