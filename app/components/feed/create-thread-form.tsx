"use client";

import { useState } from "react";
import { FiSmile, FiUser } from "react-icons/fi";
import EmojiPicker from "@emoji-mart/react";
import { useMutation } from "@apollo/client";
import { CREATE_THREAD } from "@/graphql/mutations";

export default function CreatePostForm() {
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [threadText, setThreadText] = useState<string>("");

    const [createThread, { loading, error }] = useMutation(CREATE_THREAD);

    const handleEmojiSelect = (emoji: any) => {
        setThreadText((currentText) => currentText + emoji.native);
        setShowEmojiPicker(false);
    };

    const handleThreadSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await createThread({
                variables: {
                    content: threadText,
                },
            });
        } catch (error) {
            console.error("Error creating thread:", error);
        }
    };
    return (
        <div className="border-b border-neutral-700 pt-4 pb-3 px-3">
            <div className="flex gap-4">
                <div className="h-max">
                    <div className="border-2 rounded-full ">
                        <FiUser size={28} />
                    </div>
                </div>
                <form className="w-full" onSubmit={handleThreadSubmit}>
                    <div>
                        <textarea className="text-xl placeholder-neutral-500 focus:outline-none w-full resize-none break-all" placeholder="What's happening?" value={threadText} onChange={(e) => setThreadText(e.target.value)} />
                    </div>
                    <hr className="border-neutral-700 mb-3" />
                    <div className="flex items-center">
                        <div className="relative">
                            <div className="hover:bg-sky-900/50 rounded-full p-1 cursor-pointer" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                <FiSmile className="text-sky-500" size={20} />
                            </div>
                            {showEmojiPicker && (
                                <div className="absolute top-9">
                                    <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                                </div>
                            )}
                        </div>
                        <button className="font-bold ml-auto bg-sky-500 rounded-full px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed" disabled={!threadText}>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
