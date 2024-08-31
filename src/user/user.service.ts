import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { ulid } from 'ulid'
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(private readonly userRepository: UserRepository) {
    
  }

  async create(createUserDto: CreateUserDto) {
    
    const user = await this.userRepository.create({ id: ulid(), ...createUserDto });
    return user;
  }

  findAll() {
    return this.userRepository.findAllUsers();
  }

  findOne(id: User['id']) {
    return this.userRepository.findUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
