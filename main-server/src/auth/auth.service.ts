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
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
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
    const user: UserInterface = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) throw new NotFoundException();

    const match = await compare(password, user.password);

    if (!match) throw new BadRequestException('Password does not match');
    if (user && match) {
      const { password, ...results } = user;

      return results;
    }

    return null;
  }

  async login(user: any): Promise<Record<string, any>> {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
