import { ThreadCardProps } from "@/typings/thread.typings";
import { formatTimeStamp } from "@/utils/formatTimeStamp";
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
                <div>
                    <div className="inline-flex items-center gap-2 text-left">
                        <p className=" font-bold">Peter Hogler</p>
                        <p className="text-neutral-500">@Nightrider141 · {formatTimeStamp(thread.createdAt.toString())}</p>
                    </div>
                    <div>{thread.content}</div>
                </div>
            </div>
        </div>
    );
}
