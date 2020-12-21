import { UserEntity } from '../entities/users/user.entity';

export interface MessageInterface {
  readonly id: number;
  readonly topic: string;
  readonly message: string;
  readonly sentFrom: UserEntity;
  readonly sentTo: UserEntity;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly deleted_at?: Date;
}
