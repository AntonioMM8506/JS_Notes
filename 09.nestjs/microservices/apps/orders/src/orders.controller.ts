import { Controller, Get } from '@nestjs/common'
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices'
import { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello()
  }

  @EventPattern('user_created')
  async hadnleUserCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('data is recived!')
  }
}
