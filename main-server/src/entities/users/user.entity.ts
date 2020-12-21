import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ProfileEntity } from '../profiles/profile.entity';
import { MessageEntity } from '../messages/message.entity';
import { GenericClass } from '../GenericClass';

@Entity('users')
export class UserEntity extends GenericClass {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ProfileEntity, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn()
  profile: ProfileEntity;

  @OneToMany(
    () => MessageEntity,
    (message: MessageEntity) => message.sentFrom,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  messages: MessageEntity[];

  @Column({ type: 'varchar', nullable: false, length: 45 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  password: string;
}
