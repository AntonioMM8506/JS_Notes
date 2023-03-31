import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
