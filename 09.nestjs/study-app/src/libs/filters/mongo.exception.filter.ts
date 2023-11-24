/*import { HttpException, HttpStatus } from '@nestjs/common'

export class MongoExceptionFilter extends HttpException {
  constructor(readonly mongoError: any) {
    super(this.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY)
  }

  private getMessage() {
    let message: string

    switch (this.mongoError.code) {
      case 11000:
        message = 'User already exists!'
        break
    }

    return message
  }
}*/
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response.status(status).json({
      statusCode: status,
      message: 'Custom message',
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
