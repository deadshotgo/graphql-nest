import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import {MetaData} from "./meta-data";

export interface IPaginatedType<T> {
    edges: T[];
    metaData: MetaData;
}

export function MetaDataOutput<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
    @ObjectType({ isAbstract: true })
    abstract class PaginatedType implements IPaginatedType<T> {
        @Field(() => [classRef], { nullable: true })
        edges: T[];

        @Field(() => MetaData, { nullable: true })
        metaData: MetaData;
    }
    return PaginatedType as Type<IPaginatedType<T>>;
}