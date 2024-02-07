export default function FeedStreamFilters() {
    return (
        <div className="border-b border-neutral-700">
            <div className="grid grid-cols-2">
                <button className="hover:bg-neutral-900 h-full p-4">For you</button>
                <button className="hover:bg-neutral-900 h-full p-4">Following</button>
            </div>
        </div>
    );
}
