import fastify, { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import mercurius, { MercuriusOptions } from "mercurius";
import { buildSchemaSync } from "type-graphql";

import { UserResolver } from "./user/UserResolver";

export class GraphQLServer {
    async init(): Promise<FastifyInstance> {
        const app = fastify({
            logger: true
        });
        
        app.register<MercuriusOptions>(mercurius, {
            schema: buildSchemaSync({
                resolvers: [
                    UserResolver
                ]
            }),
            graphiql: "playground"
        });
        await app.listen(8080, "0.0.0.0");
        return app;
    }
}