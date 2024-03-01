"use client";

import { GET_THREADS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import ThreadCard from "../../thread/thread-card";

import CreatePostForm from "../form/create-thread-form";
import { Thread } from "@/typings/thread.typings";

export default function ActivityStream() {
    const { data, loading, error, refetch } = useQuery(GET_THREADS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error while trying to get posts.</div>;

    return (
        <>
            <CreatePostForm refetchThreads={refetch} />
            {data?.threads &&
                data?.threads?.map((thread: Thread) => {
                    console.log(thread);
                    return <ThreadCard key={thread.id as string} thread={thread} refetch={refetch} />;
                })}
        </>
    );
}
