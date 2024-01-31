"use client";

import { usePathname } from "next/navigation";
import { deleteUserFromDB } from "@/server/actions/user.actions";

export default function ListDeleteButton({ userId }: { userId: string }) {
    const pathname = usePathname()
    return (
        <button className="border px-2 py-1" onClick={() => deleteUserFromDB(userId, pathname)}>
            delete
        </button>
    );
}
