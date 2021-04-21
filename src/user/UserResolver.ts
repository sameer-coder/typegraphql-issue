import { Args, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, User } from "./User";

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async createUser(@Args() { email, name }: CreateUserInput): Promise<User> {
        const user = new User();
        user.email = email;
        user.name = name;
        return user;
    }

    @Query(() => User)
    async getUser() {
        
    }
}