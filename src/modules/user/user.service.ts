import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async all(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  //Create a user
  async create(data): Promise<UserEntity | null> {
    return await this.userRepository.save(data);
  }
}
