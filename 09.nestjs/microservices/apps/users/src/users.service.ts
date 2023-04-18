import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'
import { ORDER_SERVICE } from './constants/services'

@Injectable()
export class UsersService {
  constructor(@Inject(ORDER_SERVICE) private orderClient: ClientProxy) {}

  async getHello() {
    // Working piece of code...
    await lastValueFrom(this.orderClient.emit('user_created', {})) // Sending message to RMQ
    return 'Hello World!'
  }
}
