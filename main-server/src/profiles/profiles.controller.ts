import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProfileInterface } from '../interfaces/profile.interface';
import { ProfilesService } from './profiles.service';
import { JWTAuthGuard } from '../auth/jwt.guard';
import { CreateProfileDto } from './dto/create-profile-dto';
import { UpdateResult } from 'typeorm';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profileService: ProfilesService) {}

  @Get()
  @UseGuards(JWTAuthGuard)
  async index(): Promise<ProfileInterface[] | NotFoundException> {
    return this.profileService.index();
  }

  @Get(':id')
  @UseGuards(JWTAuthGuard)
  async show(
    @Param('id') id: number,
  ): Promise<ProfileInterface | NotFoundException | BadRequestException> {
    return this.profileService.show(id);
  }

  @Post()
  @UseGuards(JWTAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async store(
    @Body() createProfileDto: CreateProfileDto,
  ): Promise<ProfileInterface | BadRequestException> {
    return this.profileService.store(createProfileDto);
  }

  @Put(':id')
  @UseGuards(JWTAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateProfileDto: CreateProfileDto,
  ): Promise<ProfileInterface | BadRequestException | UpdateResult> {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete()
  @UseGuards(JWTAuthGuard)
  async destroy(@Param('id') id: number): Promise<void | BadRequestException> {
    return this.profileService.destroy(id);
  }
}
