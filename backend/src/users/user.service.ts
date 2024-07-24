import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Entity, Repository} from "typeorm";
import {CreateUserInput} from "./dto/create-user.input";
import {UpdateUserInput} from "./dto/update-user.input";
import * as bcrypt from 'bcrypt';
import {MetaDataArgs} from "../paginate/meta-data.args";
import {metaDataPaginate} from "../paginate/meta-data.paginate";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
  ) {}

  async create(userInput: CreateUserInput): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(userInput.password, 10);
    return this.userRepository.save({...userInput, password: hashedPassword});
  }

  async findAll(paginationArgs: MetaDataArgs) {
     const options = {
       filterableColumns: {
         'id': true,
         'name': true
       },
     }
     return metaDataPaginate(paginationArgs, this.userRepository, options);
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id })
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ email })
  }

  async update(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    if(updateUserInput?.password) updateUserInput.password = await bcrypt.hash(updateUserInput.password, 10);

    await this.userRepository.update({ id: updateUserInput.id }, {...updateUserInput});
    return this.findOne(updateUserInput.id);
  }

  async remove(id: number) {
    await this.userRepository.delete({ id })
    return id;
  }
}
