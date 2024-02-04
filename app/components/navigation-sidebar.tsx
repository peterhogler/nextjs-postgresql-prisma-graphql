"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FiBell, FiBookmark, FiHome, FiMessageCircle, FiMoreHorizontal, FiSearch, FiUser, FiUsers } from "react-icons/fi";

export default function NavigationSidebar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className="pb-5 pt-2 flex flex-col w-[275px]">
            <Link className="text-3xl px-3 mb-3 font-bold" href="/">
                X
            </Link>
            <div className="space-y-4 text-xl">
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiHome size={25} />
                    Home
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiSearch size={25} />
                    Explore
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiBell size={25} />
                    Notifications
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiMessageCircle size={25} />
                    Messages
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiBookmark size={25} />
                    Bookmarks
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiUsers size={25} />
                    Communities
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiUser size={25} />
                    Profile
                </button>
            </div>
            <button className="font-bold text-xl bg-sky-500 w-4/5 py-2 mt-6 rounded-full ">Post</button>
            <div className="flex w-[95%] items-center justify-between mt-auto hover:bg-neutral-900 px-2 pr-5 py-2 rounded-full ">
                <button className="flex items-center gap-3">
                    <div className="border-2 rounded-full ">
                        <FiUser size={32} />
                    </div>
                    <div className="leading-tight text-left">
                        <p className=" font-bold">Peter Hogler</p>
                        <p className="text-neutral-500">@Nightrider141</p>
                    </div>
                </button>
                <FiMoreHorizontal size={20} />
            </div>
        </div>
    );
}
