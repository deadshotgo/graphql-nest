import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeeEntity} from "./entities/employee.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
