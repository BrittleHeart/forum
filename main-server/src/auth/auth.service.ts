import { Injectable } from '@nestjs/common';
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

  async validateUser(email: string, password: string): Promise<UserInterface> {
    const user = await this.userRepository.findOne({ email });
    if (!user) return null;

    const match = await compare(password, user.password);
    if (user && match) {
      const { password, ...results } = user;

      return results;
    }
  }
}
