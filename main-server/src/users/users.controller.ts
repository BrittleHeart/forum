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
  Req,
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
  async store(
    @Body() userDto: CreateUserDto,
    @Req() req,
  ): Promise<
    UserInterface | BadRequestException | InternalServerErrorException
  > {
    return await this.usersService.store(userDto, req);
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
