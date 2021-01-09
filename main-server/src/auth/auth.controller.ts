import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LocalAuthGuard } from './local.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './auth-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<any> {
    return this.authService.login(authDto);
  }
}
