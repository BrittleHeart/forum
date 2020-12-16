import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(helmet(), morgan('dev')).forRoutes('/')
  }
}
