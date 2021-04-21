import "reflect-metadata";
import { GraphQLServer } from "./src/GraphQLServer";

new GraphQLServer().init().catch (er => {
    console.error(er);
});