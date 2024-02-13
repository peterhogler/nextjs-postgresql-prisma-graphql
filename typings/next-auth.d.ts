import { DefaultSession } from "next-auth";
import { Session } from "next-auth";

interface AuthProviderProps {
    session: Session | null;
    children: React.ReactNode;
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string | null | undefined;
        } & DefaultSession["user"];
    }
}
