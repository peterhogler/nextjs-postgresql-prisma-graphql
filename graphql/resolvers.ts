import { Context } from "@/app/api/graphql/route";

export const resolvers = {
    Query: {
        threads: async (_: any, args: Record<string, never>, context: Context) => {
            return context.prisma.thread.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    author: true,
                    comments: {
                        include: {
                            author: true,
                        },
                    },
                },
            });
        },
        getThreadById: async (_: any, args: { id: string }, context: Context) => {
            return context.prisma.thread.findUnique({
                where: { id: args.id },

                include: {
                    author: true,
                    comments: {
                        include: {
                            author: true,
                            thread: true,
                        },
                    },
                },
            });
        },
    },
    Mutation: {
        createThread: (_: any, args: any, context: Context) => {
            return context.prisma.thread.create({
                data: {
                    content: args.content,
                    gif: args.gif || "",
                    author: {
                        connect: {
                            id: args.authorId,
                        },
                    },
                },
            });
        },
        createComment: async (_: any, args: any, context: Context) => {
            const comment = await context.prisma.comment.create({
                data: {
                    content: args.content,
                    author: {
                        connect: {
                            id: args.authorId,
                        },
                    },
                    thread: {
                        connect: {
                            id: args.threadId,
                        },
                    },
                },
                include: {
                    author: true,
                    thread: true,
                },
            });

            return comment;
        },
    },
};
