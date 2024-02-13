"use client";

import { GET_THREADS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import ThreadCard from "./thread-card";
import { Thread } from "@prisma/client";
import CreatePostForm from "./form/create-thread-form";
export default function ActivityStream() {
    
    const { data, loading, error, refetch } = useQuery(GET_THREADS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error while trying to get posts.</div>;

    return (
        <div>
            <CreatePostForm refetchThreads={refetch} />
            {data?.threads && data?.threads.map((thread: Thread) => <ThreadCard key={thread.id} thread={thread} />)}
        </div>
    );
}
