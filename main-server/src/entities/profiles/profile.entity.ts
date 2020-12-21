import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GenericClass } from '../GenericClass';

@Entity('profiles')
export class ProfileEntity extends GenericClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  avatar_url: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  homepage: string;

  @Column({ type: 'text', nullable: true })
  info: string;
}
