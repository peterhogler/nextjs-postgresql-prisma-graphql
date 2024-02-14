"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { FiBookmark, FiHome, FiMoreHorizontal, FiSearch, FiUser, FiUsers } from "react-icons/fi";

export default function NavigationSidebar() {
    const [isProfileExpanded, setIsProfileExanded] = useState<boolean>(false);
    const { data: session, status } = useSession();

    console.log(session?.user.image);
    return (
        <div className=" flex flex-col h-full pb-5 pt-2  w-[275px] ">
            <Link className="text-3xl px-3 mb-6 font-bold" href="/">
                X
            </Link>
            <div className="space-y-5 text-xl">
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiHome size={25} />
                    Home
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max pl-3 pr-5 py-2 rounded-full">
                    <FiSearch size={25} />
                    Explore
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
            <button className="font-bold text-xl bg-sky-500 w-4/5 py-2 mt-6 rounded-full disabled:opacity-40 disabled:cursor-not-allowed " disabled={!session}>
                Post
            </button>
            <div className="relative flex w-[98%] items-center justify-between mt-auto  px-2 pr-5 py-2 rounded-full hover:bg-neutral-900/40" onClick={() => setIsProfileExanded(!isProfileExpanded)}>
                {session ? (
                    <div className="flex flex-1 items-center gap-3 mt-auto ">
                        <div className="h-[45px] w-[45px] flex items-center justify-center relative rounded-full ">{session?.user?.image ? <Image className="rounded-full" src={session?.user?.image as string} layout="fill" objectFit="contain" alt="profile picture" /> : <FiUser size={35} />}</div>
                        <div className="flex-1 flex items-center justify-between leading-tight text-left">
                            <div>
                                <p className=" font-bold">{session?.user?.name}</p>
                                <p className="text-neutral-500">{session?.user.email}</p>
                            </div>
                        </div>
                        <FiMoreHorizontal size={22} />
                    </div>
                ) : (
                    <div className="flex flex-1 items-center gap-3 " onClick={() => setIsProfileExanded(!isProfileExpanded)}>
                        <div className="h-[40px] w-[40px] flex items-center justify-center border-[2.5px] rounded-full ">
                            <FiUser size={35} />
                        </div>
                        <div className="flex-1 flex items-center justify-between leading-tight text-left">
                            <div>
                                <p className=" font-bold">Guest</p>
                                <p className="text-neutral-500">Click to login</p>
                            </div>
                        </div>
                        <FiMoreHorizontal size={22} />
                    </div>
                )}

                {isProfileExpanded && (
                    <div className="absolute w-full bottom-[4.5rem] rounded-2xl py-4 shadow-white/20 shadow-sm">
                        {session ? (
                            <div className="px-4 py-2 hover:bg-neutral-900/40 font-bold cursor-pointer" onClick={() => signOut()}>
                                Log out from {session?.user?.name}
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-900/40 font-bold cursor-pointer" onClick={() => signIn("google")}>
                                    <FcGoogle size={20} />
                                    Sign In With Google
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-900/40 font-bold cursor-pointer" onClick={() => signIn("discord")}>
                                    <FaDiscord size={20} />
                                    Sign In With Discord
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
