import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { MessageEntity } from '../../entities/messages/message.entity';
import { Repository } from 'typeorm';
import { MessageInterface } from '../../interfaces/message.interface';

@Injectable()
export class MessagesService extends TypeOrmQueryService<MessageEntity> {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {
    super(messageRepository, { useSoftDelete: true });
  }

  /**
   * Selects all the data from database about messages
   *
   * @returns Promise<MessageInterface[] | NotFoundException>
   */
  async index(): Promise<MessageInterface[] | NotFoundException> {
    const messages: MessageInterface[] = await this.messageRepository.find({
      relations: ['sentFrom', 'sentTo'],
    });
    if (!messages.length)
      throw new NotFoundException('Could not find any messages');

    return messages;
  }
}
