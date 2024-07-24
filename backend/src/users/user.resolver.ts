import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {UserService} from "./user.service";
import {UserEntity} from "./entities/user.entity";
import {CreateUserInput} from "./dto/create-user.input";
import {UpdateUserInput} from "./dto/update-user.input";
import {PaginatedUserOutput} from "./dto/paginated-user.output";
import {MetaDataArgs} from "../paginate/meta-data.args";


@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<UserEntity> {
    return this.userService.create(createUserInput);
  }

  @Query(() => PaginatedUserOutput)
  findAllUsers(
      @Args() paginationArgs: MetaDataArgs,
  ) {
    return this.userService.findAll(paginationArgs);
  }

  @Query(() => UserEntity)
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput): Promise<UserEntity> {
    return this.userService.update(updateUserInput);
  }

  @Mutation(() => UserEntity)
  removeUser(@Args('id', { type: () => Int }) id: number): Promise<number> {
    return this.userService.remove(id);
  }
}
