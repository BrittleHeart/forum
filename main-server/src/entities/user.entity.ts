import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampHelper} from "./timestamp-helper";

@Entity('users')
export class UserEntity extends TimestampHelper {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 45})
    name: string;

    @Column({type: 'varchar', nullable: false, length: 255, unique: true})
    email: string;

    @Column({type: 'varchar', nullable: false, length: 255})
    password: string;
}
