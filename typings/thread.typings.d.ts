import { Comment, Thread as IThread, User } from "@prisma/client";

interface Thread extends IThread {
    author?: User;
    comments?: Comment[];
}

interface ThreadCardProps {
    thread: Thread;
}
