import { Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';

export const routes: Routes = [
  {
    path: '',
    component: TopicComponent,
  },
  {
    path: 'topics/:topicId',
    component: TopicDetailsComponent,
  },
];
