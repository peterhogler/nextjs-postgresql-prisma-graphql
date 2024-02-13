import ActivityStream from "./activity-stream";
import FeedStreamFilters from "./feed-stream-filters";

export default function FeedStream() {
    return (
        <div className="flex-1 border-x border-neutral-700 w-[650px]">
            <FeedStreamFilters />
            <ActivityStream />
        </div>
    );
}
