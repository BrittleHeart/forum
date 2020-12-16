import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { Repository } from 'typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { UserInterface } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';

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

  /**
   * Return record with id = :id
   *
   * @param {number} id
   * @returns UserInterface | NotFoundException | BadRequestException
   */
  async show(
    id: number,
  ): Promise<UserInterface | NotFoundException | BadRequestException> {
    if (!id || isNaN(id))
      throw new BadRequestException('id param must be an integer');

    const user = await this.userRepository.findOne({ id });
    if (!user)
      throw new NotFoundException(`User with id = ${id} does not exist`);

    return user;
  }

  async store(
    userData: CreateUserDto,
  ): Promise<UserInterface | BadRequestException> {
    return this.userRepository.save(userData);
  }
}
