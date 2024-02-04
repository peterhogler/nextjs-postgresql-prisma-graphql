"use client";
import { useState } from "react";
import { FiSmile, FiUser } from "react-icons/fi";
import NavigationSidebar from "./components/navigation-sidebar";
import TrendingSidebar from "./components/trending-sidebar";
import EmojiPicker from "@emoji-mart/react";
import Link from "next/link";

export default function Home() {
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const handleEmojiSelect = (emoji: any) => {
        setInputValue((prevInputValue) => prevInputValue + emoji.native);
        setShowEmojiPicker(false);
    };

    return (
        <main className="flex flex-1 ">
            <div className="max-w-7xl flex m-auto flex-1 h-full">
                <NavigationSidebar />
                <div className="border-x border-neutral-700  w-[650px]">
                    <div className="border-b border-neutral-700">
                        <div className="grid grid-cols-2">
                            <button className="hover:bg-neutral-900 h-full p-4">For you</button>
                            <button className="hover:bg-neutral-900 h-full p-4">Following</button>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 p-3">
                        <div className="flex gap-4">
                            <div className="h-max">
                                <div className="border-2 rounded-full ">
                                    <FiUser size={28} />
                                </div>
                            </div>
                            <form className="w-full border-neutral-700" action="">
                                <div>
                                    <textarea className="text-xl placeholder-neutral-500 focus:outline-none w-full resize-none break-all" placeholder="What's happening?" value={inputValue} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)} />
                                </div>
                                <hr className=" border-neutral-700 mb-3"></hr>
                                <div className="flex items-center ">
                                    <div className="relative">
                                        <div className="hover:bg-sky-900/50 rounded-full p-1" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                            <FiSmile className="text-sky-500" size={20} />
                                        </div>
                                        {showEmojiPicker && (
                                            <div className="absolute top-9 ">
                                                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                                            </div>
                                        )}
                                    </div>
                                    <button className="font-bold ml-auto bg-sky-500 rounded-full px-4 py-2">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="py-8 px-5 border-b border-neutral-700 space-y-4">
                        <h1 className="text-2xl font-bold">Your are currently not signed in 🥹</h1>
                        <p className="text-neutral-500">
                            You are not currently signed in. Which means your account is read-only mode. Please sign in to be able to create posts. You can sign in here{" "}
                            <Link href="/login" className="text-sky-500">
                                login page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <TrendingSidebar />
            </div>
        </main>
    );
}
