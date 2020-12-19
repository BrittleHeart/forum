import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ProfileEntity } from '../entities/profiles/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileInterface } from '../interfaces/profile.interface';
import { CreateProfileDto } from './dto/create-profile-dto';

@Injectable()
export class ProfilesService extends TypeOrmQueryService<ProfileEntity> {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {
    super(profileRepository, { useSoftDelete: true });
  }

  async index(): Promise<ProfileInterface[] | NotFoundException> {
    const profiles = await this.profileRepository.find();
    if (profiles.length === 0) throw new NotFoundException('No profiles found');

    return profiles;
  }

  async show(
    id: number,
  ): Promise<ProfileInterface | NotFoundException | BadRequestException> {
    if (!id || isNaN(id)) throw new BadRequestException('Id param must exists');
    const profile = await this.profileRepository.findOne({ id });
    if (!profile)
      throw new NotFoundException(`Could not find profile with id = ${id}`);

    return profile;
  }

  async store(
    profileData: CreateProfileDto,
  ): Promise<ProfileInterface | BadRequestException> {
    return await this.profileRepository.save(profileData);
  }
}
