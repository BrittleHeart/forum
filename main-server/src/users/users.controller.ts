import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<UserInterface[] | NotFoundException> {
    return await this.usersService.index();
  }

  @Get(':id')
  async show(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserInterface | NotFoundException | BadRequestException> {
    return this.usersService.show(id);
  }
}
