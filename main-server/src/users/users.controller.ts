import {
  BadRequestException,
  Body,
  Controller,
  Delete,
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
import { CreateProfileDto } from '../profiles/dto/create-profile-dto';

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
    @Body() createUserDto: CreateUserDto,
    @Body() createProfileDto: CreateProfileDto,
  ): Promise<
    UserInterface | BadRequestException | InternalServerErrorException
  > {
    return await this.usersService.store(createUserDto, createProfileDto);
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

  @Delete(':id')
  async destroy(
    @Param('id') id: number,
  ): Promise<void | BadRequestException | NotFoundException> {
    return await this.usersService.destroy(id);
  }
}
