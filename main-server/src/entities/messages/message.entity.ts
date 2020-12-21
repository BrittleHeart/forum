import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { GenericClass } from '../GenericClass';

@Entity('messages')
export class MessageEntity extends GenericClass {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserEntity;

  @Column({ type: 'varchar', length: 45, nullable: false })
  topic: string;

  @Column({ type: 'text', nullable: false })
  message: string;
}
