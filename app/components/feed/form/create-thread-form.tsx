"use client";

import { useState } from "react";
import { FiSmile, FiUser } from "react-icons/fi";
import EmojiPicker from "@emoji-mart/react";
import { useMutation } from "@apollo/client";
import { CREATE_THREAD } from "@/graphql/mutations";
import CreateThreadButton from "./create-thread-button";
import EmojiPickerComponent from "./emoji-picker";
import GIFPickerComponent from "./gif-picker";

export default function CreatePostForm({ refetchThreads }: { refetchThreads: any }) {
    const [threadText, setThreadText] = useState<string>("");

    const [createThread, { loading }] = useMutation(CREATE_THREAD);

    const handleThreadSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(loading);

        try {
            await createThread({
                variables: {
                    content: threadText,
                },
            });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error has occured while trying to create new thread: ${error.message}`);
            } else {
                throw new Error("Unknown error while trying to create thread.");
            }
        } finally {
            refetchThreads();
            setThreadText("");
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
                        <textarea className="text-xl placeholder-neutral-500 focus:outline-none w-full resize-none break-all" placeholder="What's happening?" value={threadText} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setThreadText(e.target.value)} />
                    </div>
                    <hr className="border-neutral-700 mb-3" />
                    <div className="flex items-center">
                        <EmojiPickerComponent onThreadTextChange={setThreadText} />
                        <GIFPickerComponent />
                        <CreateThreadButton threadText={threadText} formSubmitState={loading} />
                    </div>
                </form>
            </div>
        </div>
    );
}
