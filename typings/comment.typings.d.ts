import { Comment, User } from "@prisma/client";

interface UserComment extends Comment {
    author?: User;
}

interface IComment {
    comment: UserComment;
}
