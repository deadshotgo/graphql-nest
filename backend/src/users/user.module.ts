import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {UserService} from "./user.service";
import {UserResolver} from "./user.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserResolver],
})
export class UserModule {}
