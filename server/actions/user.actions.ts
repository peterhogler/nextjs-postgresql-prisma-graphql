"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createUserToDB(user: User, pathname: string) {
    try {
        await prisma.user.create({
            data: user,
        });
        revalidatePath(pathname);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Unable to create user: ${error.message}`);
        } else {
            throw new Error("Unknown error has occured while trying to create user to the DB - Prisma");
        }
    }
}

async function deleteUserFromDB(userId: string, pathname: string) {
    try {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });

        revalidatePath(pathname);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error while trying to delete user from DB: ${error.message}`);
        } else {
            throw new Error("Unknown error has occured while trying to delete user - Prisma");
        }
    }
}

export { createUserToDB, deleteUserFromDB };
