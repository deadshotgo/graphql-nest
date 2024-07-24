import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {EmployeeEntity} from "./entities/employee.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService {
  constructor(
      @InjectRepository(EmployeeEntity)
      private readonly employeeRepository: Repository<EmployeeEntity>
  ) {}
  async create(createEmployeeInput: CreateEmployeeInput): Promise<EmployeeEntity> {
    const hashedPassword = await bcrypt.hash(createEmployeeInput.password, 10);
    return this.employeeRepository.save({...createEmployeeInput, password: hashedPassword});
  }

  async findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find()
  }

  async findOne(id: number): Promise<EmployeeEntity> {
    return this.employeeRepository.findOneBy({ id })
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput): Promise<EmployeeEntity> {
    if(updateEmployeeInput?.password) updateEmployeeInput.password = await bcrypt.hash(updateEmployeeInput.password, 10);

    await this.employeeRepository.update({ id: updateEmployeeInput.id }, {...updateEmployeeInput});
    return this.findOne(updateEmployeeInput.id);
  }

  async remove(id: number): Promise<number> {
    await this.employeeRepository.delete({ id })
    return id;
  }
}
