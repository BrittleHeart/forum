import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { UserInterface } from '../interfaces/user.interface';
import { CreateUserDto } from './dto/create-user-dto';
import { compare } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user-dto';
import { hashPassword } from '../utils';
import { ProfileEntity } from '../entities/profiles/profile.entity';
import { CreateProfileDto } from '../profiles/dto/create-profile-dto';

@Injectable()
@QueryService(UserEntity)
export class UsersService extends TypeOrmQueryService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {
    super(userRepository, { useSoftDelete: true });
  }

  /**
   * Gets all of the users
   *
   * @returns UserInterface[] | NotFoundException
   */
  async index(): Promise<UserInterface[] | NotFoundException> {
    const users: UserInterface[] = await this.userRepository.find();
    if (users.length === 0)
      throw new NotFoundException('Could not find any users');

    return users;
  }

  /**
   * Return record with id = :id
   *
   * @param {number} id
   * @returns UserInterface | NotFoundException | BadRequestException
   */
  async show(
    id: number,
  ): Promise<UserInterface | NotFoundException | BadRequestException> {
    if (!id || isNaN(id))
      throw new BadRequestException('id param must be an integer');

    const user: UserInterface = await this.userRepository.findOne({ id });
    if (!user)
      throw new NotFoundException(`User with id = ${id} does not exist`);

    return user;
  }

  /**
   * Creates new user
   *
   * @param {CreateUserDto} createUserDto
   * @param createProfileDto
   * @returns Promise<UserInterface | BadRequestException | InternalServerErrorException>
   */
  async store(
    createUserDto: CreateUserDto,
    createProfileDto: CreateProfileDto,
  ): Promise<
    UserInterface | BadRequestException | InternalServerErrorException
  > {
    /*
      Lets check if user with follow email already exists in database
      If so, don't let the user create his account
     */
    const existing: UserInterface = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    if (existing)
      throw new BadRequestException(
        `User with email = ${createUserDto.email} already exists`,
      );

    /*
      Hashing the password with bcrypt
      That should be enough to protect user's privacy
     */
    const hashed_password: string | undefined = await hashPassword(
      createUserDto.password,
    );
    if (hashed_password === undefined)
      throw new InternalServerErrorException('Could not hash password');

    const profile = new ProfileEntity();
    profile.avatar_url = createProfileDto.avatar_url;
    profile.first_name = createProfileDto.first_name;
    profile.last_name = createProfileDto.last_name;
    profile.city = createProfileDto.city;
    profile.homepage = createProfileDto.homepage;
    profile.info = createProfileDto.info;
    await this.profileRepository.save(profile);

    createUserDto.password = hashed_password.trim();
    createUserDto.profile = profile;
    return this.userRepository.save(createUserDto);
  }

  /**
   *
   * @param {number} id
   * @param {UpdateUserDto} updateUserDto
   * @returns Promise<UpdateResult | UserInterface | BadRequestException | NotFoundException | InternalServerErrorException>
   */
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<
    | UpdateResult
    | UserInterface
    | BadRequestException
    | NotFoundException
    | InternalServerErrorException
  > {
    /*
      Lets check if id param that was passed is really integer and if exists.
      If not, don't let the user go through
     */
    if (!id || isNaN(id)) throw new BadRequestException('Id param must exists');

    /*
      Find the user with id = :id. and if it's undefined
      throw not found exception.
     */
    const user: UserInterface = await this.userRepository.findOne({ id });
    if (!user)
      throw new NotFoundException(`Could not find user with id = ${id}`);

    /*
      Destructure user password from database,
      and try to compare passed password and user's password.
     */
    const { password } = user;
    const match: boolean = await compare(updateUserDto.password, password);

    /*
      Here we have more fun than previously.
      First of all, we need to check, if passed data is not the same as currently in database.
      If so

      - Don't let user to pass through,
      - Inform him, that data that he passed, are the same and nothing was updated
     */
    if (updateUserDto.name === user.name && match)
      throw new BadRequestException(
        'Nothing was updated. Passed data are the same as in database',
      );
    /*
      if name that user pass wasn't the same as in database
      change it, and nothing more

      This is useful to protect our scope of memory before wasting.
     */ else if (
      updateUserDto.name !== user.name &&
      match
    )
      return await this.userRepository.query(
        'Update users set name=? where id=?',
        [updateUserDto.name, id],
      );
    /*
      if user name is the same as in database, but password is different
      Update password, and nothing more,

      As previously I am trying to protect our scope of memory.
      */ else if (
      updateUserDto.name === user.name &&
      !match
    ) {
      const hashed_password: string | undefined = await hashPassword(
        updateUserDto.password,
      );
      if (hashed_password === undefined)
        throw new InternalServerErrorException('Could not hash password');
      return await this.userRepository.query(
        'Update users set password=? where id=?',
        [hashed_password, id],
      );
    }

    /**
     And finally, if everything is different, update everything
     But we need to remember about hashing password

     The hashPassword method derived from
     @see ../src/util.ts
     */
    const hashed_password: string | undefined = await hashPassword(
      updateUserDto.password,
    );
    if (hashed_password === undefined)
      throw new InternalServerErrorException('Could not hash password');

    updateUserDto.password = hashed_password;
    return await this.userRepository.update({ id }, updateUserDto);
  }

  /**
   * Soft deleting user from database.
   *
   * @param {number} id
   * @returns Promise<void | BadRequestException | NotFoundException>
   */
  async destroy(
    id: number,
  ): Promise<void | BadRequestException | NotFoundException> {
    if (!id || isNaN(id)) throw new BadRequestException('Id param must exists');
    const user: UserInterface = await this.userRepository.findOne({ id });
    if (!user)
      throw new NotFoundException(`Could not find user with id = ${id}`);

    await this.userRepository.softDelete({ id });
  }
}
