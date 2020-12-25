import { Topic } from './topic';

export interface TopicServiceInterface {
  addNewTopic(topic: Topic): number | Promise<number>;
  getTopic(id: number): Topic | Promise<Topic>;
  clearTopics(): Topic[] | Promise<Topic[]>;
  selectAllTopics(): Topic[] | Promise<Topic[]>;
}
