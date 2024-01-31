import prisma from "@/lib/prisma";
import List from "./components/list";
import Form from "./components/form";

async function getUsersFromDB() {
    const users = await prisma.user.findMany();
    return users as User[];
}

export default async function Home() {
    const users = await getUsersFromDB();
    return (
        <main className="flex gap-2 p-4">
            <Form />
            <List users={users} />
        </main>
    );
}
