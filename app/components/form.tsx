"use client";

import { usePathname } from "next/navigation";

import { createUserToDB } from "@/server/actions/user.actions";

export default function Form() {
    const pathname = usePathname()

    async function createUser(formData: FormData) {
        
        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
        };

        await createUserToDB(user, pathname);
    }

    return (
        <form className="h-min space-y-2  p-3 border" action={createUser}>
            <div className="flex flex-col ">
                <label htmlFor="name">Name</label>
                <input className="border" type="text" id="name" name="name" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input className="border" type="text" id="email" name="email" />
            </div>
            <button className="border p-1 w-full" type="submit">
                Create User
            </button>
        </form>
    );
}
