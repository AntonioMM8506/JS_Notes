import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';

// Import ms libraries
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(OrdersModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
