import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { topics } from '../topics';
import { CrudService } from '../externals/crud-service';

@Injectable({
  providedIn: 'root',
})
export class TopicsService extends CrudService<Topic> {
  private topics: Topic[] = topics;

  constructor() {
    super();
    this.collection = this.topics;
    this.errors = [];
  }
}
