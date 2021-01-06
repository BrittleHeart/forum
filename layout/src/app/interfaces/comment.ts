import { User } from './user';

export interface Comment {
  readonly user: User;
  readonly title: string;
  readonly content: string;
}
