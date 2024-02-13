import { Thread as IThread, User } from "@prisma/client";

interface Thread extends IThread {
    author?: User;
}

interface ThreadCardProps {
    thread: Thread;
}
