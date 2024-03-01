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
                    likes: {
                        include: {
                            user: true,
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
        createLike: async (_: any, args: any, context: Context) => {
            const likeExist = await context.prisma.like.findFirst({
                where: {
                    userId: args.userId,
                    threadId: args.threadId,
                },
            });

            if (likeExist) {
                await context.prisma.like.delete({
                    where: {
                        id: likeExist.id,
                    },
                });

                return;
            }

            const like = await context.prisma.like.create({
                data: {
                    user: {
                        connect: {
                            id: args.userId,
                        },
                    },
                    thread: {
                        connect: {
                            id: args.threadId,
                        },
                    },
                },
                include: {
                    thread: true,
                    user: true,
                },
            });

            return like;
        },
    },
};
