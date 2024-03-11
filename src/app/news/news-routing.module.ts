import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsService } from './services/news.service';
import { StoryComponent } from './story/story.component';


const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'story', component: StoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NewsService]
})
export class NewsRoutingModule { }
