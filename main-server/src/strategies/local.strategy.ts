import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**
   * Passport strategy function that will handle auth validation
   *
   * @param {string} username -> needs to be called username
   * @param {string} password
   */
  async validate(
    username: string,
    password: string,
  ): Promise<UserInterface | UnauthorizedException> {
    const user = await this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    return user;
  }
}
