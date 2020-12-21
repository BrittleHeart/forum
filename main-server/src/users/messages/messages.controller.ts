import { Controller, Get, NotFoundException } from '@nestjs/common';
import { MessageInterface } from '../../interfaces/message.interface';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get()
  async index(): Promise<MessageInterface[] | NotFoundException> {
    return await this.messageService.index();
  }
}
