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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { JWTAuthGuard } from '../auth/jwt.guard';

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
}
