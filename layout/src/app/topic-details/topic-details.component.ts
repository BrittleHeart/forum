import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../interfaces/topic';
import { topics } from '../topics';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss'],
})
export class TopicDetailsComponent implements OnInit {
  topic: Topic;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const topicIdFromRoute = this.route.snapshot.paramMap.get('topicId');
    this.topic = topics.find(
      (topic: Topic) => topic.id === Number(topicIdFromRoute)
    );
  }
}
