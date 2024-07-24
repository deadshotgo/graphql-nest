import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@ObjectType()
@Entity({ name: 'employee' })
export class EmployeeEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({select: false})
  password: string;

  @Field()
  @Column()
  experience: string;

  @Field()
  @Column()
  vertical: string;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ name: 'file_link', nullable: true })
  fileLink?: string;

  @Field()
  @Column({nullable: true })
  salary?: string;

  @Field()
  @Column({ name: 'is_active'})
  isActive: boolean;

  @Field()
  @CreateDateColumn( { name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn( { name: 'updated_at' })
  updatedAt: Date;
}
