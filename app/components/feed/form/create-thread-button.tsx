"use client";

export default function CreateThreadButton({ threadText, formSubmitState }: { threadText: string; formSubmitState: boolean }) {
    return (
        <button type="submit" className="font-bold ml-auto bg-sky-500 rounded-full px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed" disabled={!threadText}>
            {formSubmitState ? "Creating.." : "Post"}
        </button>
    );
}
