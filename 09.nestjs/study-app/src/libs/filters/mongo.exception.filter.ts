import { HttpException, HttpStatus } from '@nestjs/common'

export class MongoExceptionFilter extends HttpException {
  constructor() {
    super('Message', HttpStatus.FORBIDDEN)
  }
}
