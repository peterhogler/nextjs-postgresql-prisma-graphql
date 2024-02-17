import { ThreadCardProps } from "@/typings/thread.typings";
import { formatTimeStamp } from "@/utils/formatTimeStamp";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiBookmark, FiCornerDownRight, FiMessageCircle, FiUser } from "react-icons/fi";

export default function ThreadCard({ thread }: ThreadCardProps) {
    return (
        <div className="pt-4 pb-3 px-4 border-b border-x border-neutral-700 hover:bg-neutral-900/40 cursor-pointer">
            <Link href={`status/${thread.id}`} className="flex gap-4">
                <div className="h-max">
                    <div className="h-[45px] w-[45px] flex items-center justify-center relative rounded-full ">{thread?.author?.image ? <Image className="rounded-full" src={thread?.author?.image as string} layout="fill" objectFit="contain" alt="profile picture" /> : <FiUser size={35} />}</div>
                </div>
                <div className="w-full ">
                    <div className="inline-flex items-center gap-2 text-left">
                        <p className=" font-bold">{thread?.author?.name}</p>
                        <p className="text-neutral-500">
                            {thread?.author?.email} · {formatTimeStamp(thread.createdAt.toString())}
                        </p>
                    </div>
                    <div className="w-full space-y-2">
                        <div>{thread.content}</div>
                        {thread.gif && (
                            <div className="h-[250px]  rounded-xl  relative border border-neutral-500">
                                <Image src={thread.gif} className="rounded-xl" layout="fill" objectFit="center" objectPosition="center" alt="Selected GIF" />
                            </div>
                        )}
                        <div className="flex items-center justify-between">
                            <div className="flex-1 flex items-center gap-24">
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-500">
                                    <FiMessageCircle size={21} />
                                    <span>{thread.comments?.length}</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-500">
                                    <FiCornerDownRight size={21} />
                                    <span>0</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-rose-600">
                                    <FaRegHeart size={19} />
                                    {/* <FaHeart /> */}
                                    <span>0</span>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-500">
                                    <FiBookmark size={19} />
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
