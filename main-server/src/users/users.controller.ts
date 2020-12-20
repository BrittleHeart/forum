import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { JWTAuthGuard } from '../auth/jwt.guard';
import { UpdateUserDto } from './dto/update-user-dto';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JWTAuthGuard)
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

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async store(
    @Body() userDto: CreateUserDto,
  ): Promise<
    UserInterface | BadRequestException | InternalServerErrorException
  > {
    return this.usersService.store(userDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<
    | UpdateResult
    | UserInterface
    | NotFoundException
    | BadRequestException
    | InternalServerErrorException
  > {
    return await this.usersService.update(id, updateUserDto);
  }
}
