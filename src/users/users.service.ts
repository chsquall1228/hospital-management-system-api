import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RequestPageDto } from 'src/commons/dto/request-page.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByUsername(createUserDto.username);
    if (user) {
      throw new BadRequestException('Duplicate User');
    }
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll(query: RequestPageDto): Promise<User[]> {
    return this.userModel
      .find({}, null, { limit: query.limit, skip: query.offset })
      .exec();
  }

  findCount(query: RequestPageDto): Promise<number> {
    return this.userModel.countDocuments().exec();
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  remove(id: number) {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
