import { Comment } from './comment';

export interface Topic {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly comments?: Comment[];
}
