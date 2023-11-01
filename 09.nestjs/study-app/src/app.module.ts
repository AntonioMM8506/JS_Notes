import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// Import custom libraries
import { ThrottlerModule } from '@nestjs/throttler'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

// Import config files
import { throttlerConfig, databaseConfig } from '@config/index'

// Import feature modules
import { UsersModule } from './features/users/users.module'
import { AuthModule } from './features/auth/auth.module'
import { ProductsModule } from './features/products/products.module'
import { CatalogModule } from './features/catalog/catalog.module'

@Module({
  imports: [
    // Config module (env vars)
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [throttlerConfig, databaseConfig],
    }),
    // Rate limit
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ttl: configService.get<number>('throttler.ttl'),
        limit: configService.get<number>('throttler.limit'),
      }),
    }),
    // MongoDB connection
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongoConnectionString'),
      }),
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    CatalogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
