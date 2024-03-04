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

    return (
        <div className="hidden sm:flex flex-col items-center lg:items-start h-full pb-5 pt-2 px-3 lg:px-0 lg:w-[275px] ">
            <Link className="text-3xl lg:pl-3 lg:pr-5 py-2 px-2 mb-3 lg:mb-4 font-bold" href="/">
                X
            </Link>
            <div className="space-y-5 text-xl">
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max lg:pl-3 lg:pr-5 py-2 px-2 rounded-full">
                    <FiHome size={25} />
                    <span className="hidden lg:block">Home</span>
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max lg:pl-3 lg:pr-5 py-2 px-2 rounded-full">
                    <FiSearch size={25} />
                    <span className="hidden lg:block">Explore</span>
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max lg:pl-3 lg:pr-5 py-2 px-2 rounded-full">
                    <FiBookmark size={25} />
                    <span className="hidden lg:block">Bookmarks</span>
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max lg:pl-3 lg:pr-5 py-2 px-2 rounded-full">
                    <FiUsers size={25} />
                    <span className="hidden lg:block">Communities</span>
                </button>
                <button className="flex items-center gap-4 hover:bg-neutral-900 w-max lg:pl-3 lg:pr-5 py-2 px-2 rounded-full">
                    <FiUser size={25} />
                    <span className="hidden lg:block">Profile</span>
                </button>
            </div>
            <button className="hidden lg:block font-bold text-xl bg-sky-500 w-4/5 py-2 mt-6 rounded-full disabled:opacity-40 disabled:cursor-not-allowed " disabled={!session}>
                Post
            </button>
            <div className="relative flex w-[98%] items-center justify-between mt-auto  lg:px-2 lg:pr-5 lg:py-2 rounded-full hover:bg-neutral-900/40" onClick={() => setIsProfileExanded(!isProfileExpanded)}>
                {session ? (
                    <div className="flex flex-1 items-center gap-3 mt-auto ">
                        <div className="h-[45px] w-[45px] flex items-center justify-center relative rounded-full ">{session?.user?.image ? <Image className="rounded-full" src={session?.user?.image as string} layout="fill" objectFit="contain" alt="profile picture" /> : <FiUser size={35} />}</div>
                        <div className="flex-1 hidden lg:flex items-center justify-between leading-tight text-left">
                            <div>
                                <p className=" font-bold">{session?.user?.name}</p>
                                <p className="text-neutral-500">{session?.user.email}</p>
                            </div>
                            <FiMoreHorizontal size={22} />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-1 items-center gap-3 " onClick={() => setIsProfileExanded(!isProfileExpanded)}>
                        <div className="h-[40px] w-[40px] flex items-center justify-center border-[2.5px] rounded-full ">
                            <FiUser size={30} />
                        </div>
                        <div className="hidden flex-1 lg:flex items-center justify-between leading-tight text-left">
                            <div>
                                <p className=" font-bold">Guest</p>
                                <p className="text-neutral-500">Click to login</p>
                            </div>
                            <FiMoreHorizontal size={22} />
                        </div>
                    </div>
                )}

                {isProfileExpanded && (
                    <div className="absolute w-[max-content] lg:w-full bottom-[4.5rem] rounded-2xl py-4 shadow-white/20 shadow-sm z-10 bg-black">
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
