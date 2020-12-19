import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  avatar_url: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  city: string;
}
