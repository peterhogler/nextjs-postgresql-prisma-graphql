"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createUserToDB(user: any, pathname: string) {
    await prisma.user.create({
        data: user,
    });

    revalidatePath(pathname);
}

async function deleteUserFromDB(id?: string) {
    console.log("clicked");
}

export { createUserToDB, deleteUserFromDB };
