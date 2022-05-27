import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @MessagePattern({ cmd: 'greeting' })
  getHello(): string {
    return 'Hello World!';
  }
}
