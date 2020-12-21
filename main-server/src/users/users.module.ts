import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { ProfileEntity } from '../entities/profiles/profile.entity';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProfileEntity]), FriendsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
