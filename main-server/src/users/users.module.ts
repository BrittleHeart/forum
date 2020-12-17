import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  controllers: [UsersController, AuthController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
