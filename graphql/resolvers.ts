import { Context } from "@/app/api/graphql/route";
import prisma from "@/prisma/db";

export const resolvers = {
    Query: {
        threads: async (_: any, args: any, context: Context) => {
            return context.prisma.thread.findMany();
        },
    },
    Mutation: {
        createThread: (_: any, args: any, context: Context) => {
            console.log(args);
        },
    },
};
