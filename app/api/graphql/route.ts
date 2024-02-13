import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schemas";
import { resolvers } from "@/graphql/resolvers";
import prisma from "@/prisma/db";
import { NextApiRequest, NextApiResponse } from "next";

export type Context = {
    prisma: typeof prisma;
};

const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
    context: async (req: NextApiRequest, res: NextApiResponse) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
