import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

// Database MongoDB
import { MongooseModule } from '@nestjs/mongoose'
import { UsersRepository } from './users.repository'
import { User, UserSchema } from './schemas/user.schema'

import { DatabaseModule, RmqModule } from '@app/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { ORDER_SERVICE } from './constants/services'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/users/.env',
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    DatabaseModule,
    RmqModule.register({
      name: ORDER_SERVICE,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
