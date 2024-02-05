import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/graphql/schemas";
import { resolvers } from "@/graphql/resolvers";
import prisma from "@/prisma/db";
import { PrismaClient } from "@prisma/client/extension";

export type Context = {
    prisma: PrismaClient;
};

const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
    context: async (req: NextRequest, res: any) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
