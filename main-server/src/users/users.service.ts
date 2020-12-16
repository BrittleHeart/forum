import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { Repository } from 'typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
@QueryService(UserEntity)
export class UsersService extends TypeOrmQueryService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository, { useSoftDelete: true });
  }

  /**
   * Gets all of the users
   *
   * @returns UserInterface[] | NotFoundException
   */
  async index(): Promise<UserInterface[] | NotFoundException> {
    const users = await this.userRepository.find();
    if (users.length === 0)
      throw new NotFoundException('Could not find any users');

    return users;
  }
}
