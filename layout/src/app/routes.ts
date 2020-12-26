import { Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: TopicComponent,
  },
  {
    path: 'topics/:topicId',
    component: TopicDetailsComponent,
  },
  {
    path: 'sign-in',
    component: LoginComponent,
  },
];
