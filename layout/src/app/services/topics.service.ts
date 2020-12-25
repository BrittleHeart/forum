import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { TopicServiceInterface } from '../interfaces/topic-service';
import { topics } from '../topics';

@Injectable({
  providedIn: 'root',
})
export class TopicsService implements TopicServiceInterface {
  private topics: Topic[] = topics;

  constructor() {}

  addNewTopic(topic: Topic): number {
    return this.topics.push(topic);
  }

  clearTopics(): Topic[] | Promise<[]> {
    this.topics = [];
    return this.topics;
  }

  getTopic(id: number): Topic | Promise<Topic> {
    return this.topics.find((topic: Topic) => topic.id === id);
  }

  selectAllTopics(): Topic[] | Promise<Topic[]> {
    return this.topics;
  }
}
