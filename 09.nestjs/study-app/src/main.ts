import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// Import custom libraries
import helmet from 'helmet'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  //app.enableCors();
  app.use(helmet())

  // Setup api documentation
  const configSwagger = new DocumentBuilder()
    .setTitle('Study RESTful API')
    .setDescription('Documentation for the Study RESTful API')
    .setVersion('1.0.0')
    .addTag('enroute')
    .build()
  const documentSwagger = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('api', app, documentSwagger)

  await app.listen(process.env.LISTENING_PORT || 3000)
}
bootstrap()
