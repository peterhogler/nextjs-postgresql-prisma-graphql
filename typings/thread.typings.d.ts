import { Comment, Thread as IThread, Like, User } from "@prisma/client";

interface Thread extends IThread {
    author?: User;
    comments?: Comment[];
    likes?: Like[];
}

interface ThreadCardProps {
    thread: Thread;
    refetch: any;
}
