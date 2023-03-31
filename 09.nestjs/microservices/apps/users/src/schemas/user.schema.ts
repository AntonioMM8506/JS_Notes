import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { AbstractDocument } from '@app/common'

@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  name: string

  @Prop()
  lastName: string

  @Prop()
  phoneNumber: string
}

export const UserSchema = SchemaFactory.createForClass(User)
