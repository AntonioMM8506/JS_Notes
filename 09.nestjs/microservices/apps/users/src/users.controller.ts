import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.usersService.getHello()
  }
}
