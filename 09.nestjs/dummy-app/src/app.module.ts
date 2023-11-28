import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@features/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    // Rate limit
    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.TTL),
        limit: parseInt(process.env.LIMIT),
      },
    ]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
