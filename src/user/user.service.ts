import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user-dto';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async update(id: string, UpdateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, UpdateUserDto, {
      new: true
    })
      .exec();
  }

  async findAll() {
    return this.userModel.find().exec()
  }

  async findOne(userName: string) {
    return this.userModel.find({userName:userName})
  }
  async findOneById(id: string) {
   
    return this.userModel.findById(id).exec()
  }

  async delete(id:string){
    return this.userModel.findByIdAndDelete(id).exec()
  }





}
