import { useState } from "react";
import { FiSmile, FiUser } from "react-icons/fi";
import EmojiPicker from "@emoji-mart/react";

export default function EmojiPickerComponent({ onThreadContentChange }: { onThreadContentChange: any }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

    const handleEmojiSelect = (emoji: any) => {
        onThreadContentChange((currentText: string) => currentText + emoji.native);
        setShowEmojiPicker(false);
    };
    return (
        <div className="relative">
            <div className="hover:bg-sky-900/50 rounded-full p-1 cursor-pointer" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <FiSmile className="text-sky-500" size={20} />
            </div>
            {showEmojiPicker && (
                <div className="absolute top-9 z-10">
                    <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                </div>
            )}
        </div>
    );
}
