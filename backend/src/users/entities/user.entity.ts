import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Extensions, Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({name: 'app_user',  schema: 'public' })
export class UserEntity {

    @Field(type => ID)
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
    @Column({ default: 'MANAGER' })
    role: string;

    @Field()
    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @Field()
    @Column({ name: 'is_admin', default: false })
    isAdmin: boolean;

    @Field()
    @CreateDateColumn( { name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn( { name: 'updated_at' })
    updatedAt: Date;

}