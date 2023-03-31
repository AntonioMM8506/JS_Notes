import { NestFactory } from '@nestjs/core'
import { UsersModule } from './users.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(UsersModule)
  //await app.listen(3000)
  const configService = app.get(ConfigService)
  await app.listen(configService.get('PORT'))
}
bootstrap()
