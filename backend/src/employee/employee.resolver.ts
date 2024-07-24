import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => EmployeeEntity)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => EmployeeEntity)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput): Promise<EmployeeEntity> {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [EmployeeEntity], { name: 'employee' })
  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeService.findAll();
  }

  @Query(() => EmployeeEntity, { name: 'employee' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<EmployeeEntity> {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => EmployeeEntity)
  updateEmployee(@Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput): Promise<EmployeeEntity> {
    return this.employeeService.update(updateEmployeeInput.id, updateEmployeeInput);
  }

  @Mutation(() => EmployeeEntity)
  removeEmployee(@Args('id', { type: () => Int }) id: number): Promise<number> {
    return this.employeeService.remove(id);
  }
}
