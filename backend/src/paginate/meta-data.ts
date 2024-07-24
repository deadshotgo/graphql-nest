import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class MetaData {
    @Field()
    itemsPerPage: number;

    @Field()
    totalItems: number;

    @Field()
    currentPage: number;

    @Field()
    totalPages: number;
}