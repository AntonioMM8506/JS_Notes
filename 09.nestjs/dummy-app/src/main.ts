import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Setting our app
  app.use(helmet());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Create API docs
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Title for API docs')
    .setDescription('Lorem ipsum...')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs/api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
