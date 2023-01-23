import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Lets config swagger doc and build it
  const config = new DocumentBuilder()
    .setTitle('Example of API docs')
    .setDescription('This is the descript of the swagger doc')
    .setVersion('2.0')
    .addTag('restAPI')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
