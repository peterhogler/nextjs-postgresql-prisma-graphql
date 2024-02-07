import CreatePostForm from "./create-thread-form";
import ActivityStream from "./activity-stream";
import FeedStreamFilters from "./feed-stream-filters";

export default function FeedStream() {
    return (
        <div className="border-x border-neutral-700 w-[650px]">
            <FeedStreamFilters />
            <CreatePostForm />
            <ActivityStream />
        </div>
    );
}
