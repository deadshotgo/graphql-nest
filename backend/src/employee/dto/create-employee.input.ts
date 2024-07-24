import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  experience: string;

  @Field()
  vertical: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  fileLink?: string;

  @Field({ nullable: true })
  salary?: string;

  @Field()
  isActive: boolean;
}
