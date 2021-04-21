import { IsAlpha, IsEmail, IsLowercase, Length } from "class-validator";
import { ArgsType, Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;
}

@ArgsType()
export class CreateUserInput {
    @Field()
    @IsAlpha()
    @IsLowercase()
    @Length(1, 50)
    name: string;

    @Field()
    @IsEmail()
    email: string;
}