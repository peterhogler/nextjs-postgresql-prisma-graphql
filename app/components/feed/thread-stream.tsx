"use client";

import { useParams } from "next/navigation";
import { GET_THREAD } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { FiBookmark, FiCornerDownRight, FiMessageCircle, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { formatTimeStampFull } from "@/utils/formatTimeStampFull";
import { useState } from "react";
import CreateThreadButton from "./form/create-thread-button";

export default function ThreadStream() {
    const [threadContent, setThreadContent] = useState<string>("");

    const { threadId } = useParams();

    const { data, loading, error } = useQuery(GET_THREAD, {
        variables: { getThreadByIdId: threadId },
    });

    const thread = data?.getThreadById;

    return (
        <>
            {thread && (
                <div className="flex flex-col pt-4 pb-3 px-4 border-b  border-neutral-700 cursor-pointer space-y-2">
                    <div className="flex items-center gap-2 h-max">
                        <div className="h-[45px] w-[45px] flex items-center justify-center relative rounded-full ">{thread?.author?.image ? <Image className="rounded-full" src={thread.author.image as string} layout="fill" objectFit="contain" alt="profile picture" /> : <FiUser size={35} />}</div>
                        <div className="flex flex-col  leading-tight">
                            <p className=" font-bold">{thread.author?.name}</p>
                            <p className="text-neutral-500">{thread.author?.email}</p>
                        </div>
                    </div>
                    <div>{thread.content}</div>
                    {thread.gif && (
                        <div className="h-[250px]  rounded-xl  relative border border-neutral-500">
                            <Image src={thread.gif} className="rounded-xl" layout="fill" objectFit="center" objectPosition="center" alt="Selected GIF" />
                        </div>
                    )}
                    <div className="text-neutral-500">{formatTimeStampFull(thread.createdAt)}</div>
                    <div className="w-full space-y-2">
                        <div className="w-full h-[1px] bg-neutral-500" />
                        <div className="flex items-center justify-between">
                            <div className="flex-1 flex items-center gap-24">
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-500">
                                    <FiMessageCircle size={21} />
                                    <span>0</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-500">
                                    <FiCornerDownRight size={21} />
                                    <span>1</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-rose-600">
                                    <FaRegHeart size={19} />
                                    {/* <FaHeart /> */}
                                    <span>1</span>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-500">
                                    <FiBookmark size={19} />
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-neutral-500" />
                    </div>
                    <form className="w-full">
                        <div className="h-max flex py-3">
                            <div className="flex-1 flex items-center gap-2">
                                <div className="shrink-0 h-[40px] w-[40px] flex items-center justify-center relative rounded-full ">{thread.author.image ? <Image className="rounded-full" src={thread.author.image as string} layout="fill" objectFit="contain" alt="profile picture" /> : <FiUser size={35} />}</div>
                                <input className="text-xl placeholder-neutral-500 focus:outline-none w-full resize-none break-all" placeholder="Post your reply" value={threadContent} />
                            </div>
                            <CreateThreadButton threadContent={threadContent} formSubmitState={loading} text={"Reply"} />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
