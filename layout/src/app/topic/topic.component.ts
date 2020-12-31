import { Component, OnInit } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { TopicsService } from '../services/topics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  public topics: Topic[] | Promise<Topic[]> | Observable<Topic[]>;

  constructor(private readonly topicsService: TopicsService) {}

  ngOnInit(): void {
    this.topics = this.topicsService.selectAll();
  }
}
