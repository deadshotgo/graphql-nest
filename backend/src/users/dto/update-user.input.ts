import {Field, ID, InputType} from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {
    @Field( type => ID)
    id: number;

    @Field({ nullable: true })
    email: string;

    @Field({nullable: true})
    password: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    role: string;

    @Field({nullable: true})
    isActive: boolean;

    @Field({nullable: true})
    isAdmin: boolean;

}