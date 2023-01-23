import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import db dependencies
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-db-test',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tododb',
      entities: [],
      synchronize: true,
    }),*/
    UsersModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
