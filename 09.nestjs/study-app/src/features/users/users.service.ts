import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

// Import libraries
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './entities/user.entity'

import { MongoExceptionFilter } from '@/libs/filters'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = await new this.userModel(createUserDto)

    return createdUser.save()
  }


  async findByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email: email }).exec();

    return user
  }

  findAll() {
    return `This action returns all users`
  }

  async findOne(id: any) {
    const user = await this.userModel.findById(id).exec()

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, updateUserDto)
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
