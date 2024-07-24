import { ArgsType, Field, Int } from '@nestjs/graphql';
import {GraphQLJSONObject} from "graphql-type-json";
@ArgsType()
export class MetaDataArgs {
    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => Int, { nullable: true })
    limit?: number;

    @Field(() => GraphQLJSONObject, { nullable: true })
    filters?: { [key: string]: any };

}