import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

// Database MongoDB
import { MongooseModule } from '@nestjs/mongoose'
import { UsersRepository } from './users.repository'
import { User, UserSchema } from './schemas/user.schema'

import { DatabaseModule } from '@app/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'

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
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
