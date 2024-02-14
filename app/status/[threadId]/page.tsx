import ThreadStream from "@/app/components/feed/thread-stream";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function Page() {
    return (
        <div className="w-[605px] border-x border-neutral-700">
            <div className="inline-flex items-center gap-8 px-3 py-3 sticky top-0 border-neutral-700 bg-black/70 max-h-min backdrop-blur-sm z-10 ">
                <Link href="/">
                    <FiArrowLeft size={18} />
                </Link>
                <div className="text-xl font-bold">Post</div>
            </div>
            <ThreadStream />
        </div>
    );
}
