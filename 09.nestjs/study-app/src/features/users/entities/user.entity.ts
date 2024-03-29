// Import core libraries
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  /*@Prop({
    required: true,
  })
  name: string*/

  @Prop({
    required: true,
  })
  lastName: string

  @Prop({
    unique: true,
  })
  email: string

  @Prop({
    required: true,
  })
  password: string

  @Prop()
  refreshToken?: string

  @Prop({
    default: false,
  })
  validatedAccount: boolean

  @Prop({
    enum: ['admin', 'finalUser'],
    default: 'admin',
  })
  accountType: string
}

export const UserSchema = SchemaFactory.createForClass(User)
