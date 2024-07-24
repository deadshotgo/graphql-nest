import {UserEntity} from "../entities/user.entity";
import {ObjectType} from "@nestjs/graphql";
import {MetaDataOutput} from "../../paginate/meta-data.output";

@ObjectType()
export class PaginatedUserOutput extends MetaDataOutput(UserEntity) {}
