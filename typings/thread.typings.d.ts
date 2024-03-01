import { Comment, Thread as IPrismaThread, Like, User } from "@prisma/client";

interface Thread extends IPrismaThread {
    author: User;
    comments: Comment[];
    likes: Like[];
}

interface ThreadCardProps {
    thread: Thread;
    refetch: any;
}
