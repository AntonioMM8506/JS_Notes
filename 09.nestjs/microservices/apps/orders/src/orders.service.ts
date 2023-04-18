import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class OrdersService {
  private readonly logger = new Logger()
  getHello(): string {
    return 'Hello World!'
  }
}
