import { ThreadCardProps } from "@/typings/thread.typings";
import { formatTimeStamp } from "@/utils/formatTimeStamp";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function ThreadCard({ thread }: ThreadCardProps) {
    return (
        <div className="pt-4 pb-3 px-4 border-b border-b-neutral-700 hover:bg-neutral-900/40">
            <div className="flex gap-4">
                <div className="h-max">
                    <div className="border-2 rounded-full ">
                        <FiUser size={28} />
                    </div>
                </div>
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 text-left">
                        <p className=" font-bold">{thread?.author?.name}</p>
                        <p className="text-neutral-500">
                            {thread?.author?.email} · {formatTimeStamp(thread.createdAt.toString())}
                        </p>
                    </div>
                    <div className="w-full space-y-2">
                        <div>{thread.content}</div>
                        {thread.gif && (
                            <div className="h-[200px]  rounded-xl  relative border border-neutral-500">
                                <Image src={thread.gif} className="rounded-xl" layout="fill" objectFit="center" objectPosition="center" alt="Selected GIF" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
