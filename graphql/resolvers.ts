import { Context } from "@/app/api/graphql/route";

export const resolvers = {
    Query: {
        threads: async (_: any, args: any, context: Context) => {
            return context.prisma.thread.findMany();
        },
        getThreadById: async (_: any, args: any, context: Context) => {
            return context.prisma.thread.findUnique({
                where: { id: args.id },
            });
        },
    },
    Mutation: {
        createThread: (_: any, args: any, context: Context) => {
            console.log(args);
        },
    },
};
