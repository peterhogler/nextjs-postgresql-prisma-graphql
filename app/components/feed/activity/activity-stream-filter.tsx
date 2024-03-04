export default function ActivityStreamFilter() {
    return (
        <div className="sticky top-0 border-b border-x border-neutral-700 bg-black/70 max-h-min backdrop-blur-sm z-10">
            <div className="grid grid-cols-2">
                <button className="hover:bg-neutral-500/20 h-full p-[0.75rem] lg:p-4">For you</button>
                <button className="hover:bg-neutral-500/20 h-full p-[0.75rem] lg:p-4">Following</button>
            </div>
        </div>
    );
}
