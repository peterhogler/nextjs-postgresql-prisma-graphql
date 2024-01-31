"use client";

import { createUserToDB } from "@/server/actions/user.actions";
import { usePathname } from "next/navigation";

export default function Form() {
    const pathname = usePathname();

    //FUTURE TODO - React Hook Forms and Zod (Form Validation)
    async function createUser(formData: FormData) {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;

        if (!name || !email) return;

        const user: User = {
            name,
            email,
        };

        try {
            await createUserToDB(user, pathname);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Unable to create user: ${error.message}`);
            } else {
                throw new Error("Unknown error while trying to create user to DB - Client");
            }
        }
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
