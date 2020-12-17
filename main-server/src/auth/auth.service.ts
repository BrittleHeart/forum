import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserInterface } from '../interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Try to validate the user with passed credentials.
   *
   * @param {string} email
   * @param {string} password
   * @returns UserInterface | NotFoundException
   */
  async validateUser(
    email: string,
    password: string,
  ): Promise<UserInterface | NotFoundException | null> {
    const user = await this.userRepository.findOne({ email });

    const match = await compare(password, user.password);

    if (!match) throw new BadRequestException('Password does not match');
    if (user && match) {
      const { password, ...results } = user;

      return results;
    }

    return null;
  }
}
