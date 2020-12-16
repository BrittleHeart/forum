import { Controller, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async index(): Promise<UserInterface[] | NotFoundException> {
    return await this.usersService.index();
  }
}
