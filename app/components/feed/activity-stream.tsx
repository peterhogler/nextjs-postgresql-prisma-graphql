"use client";

import { GET_THREADS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import ThreadCard from "./thread-card";
import { Thread } from "@prisma/client";
export default function ActivityStream() {
    const { data, loading, error } = useQuery(GET_THREADS);

    console.log(data?.threads);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error while trying to get posts.</div>;
    return (
        <div>
            {data?.threads && data?.threads.map((thread: Thread) => <ThreadCard key={thread.id} thread={thread} />)}
            {/* <div className="py-8 px-8 border-b border-neutral-700 space-y-4">
                <h1 className="text-2xl font-bold">You are currently not signed in 🥹</h1>
                <p className="text-neutral-500">
                    You are not currently signed in. Which means your account is read-only mode. Please sign in to be able to create posts. You can sign in here{" "}
                    <Link className="text-sky-500" href="/login">
                        login page
                    </Link>
                    .
                </p>
            </div> */}
        </div>
    );
}
