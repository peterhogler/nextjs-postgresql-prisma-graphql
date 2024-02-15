import ActivityStream from "./components/feed/activity/activity-stream";
import ActivityStreamFilter from "./components/feed/activity/activity-stream-filter";

export default function Page() {
    return (
        <div className="border-neutral-700 w-[605px]">
            <ActivityStreamFilter />
            <ActivityStream />
        </div>
    );
}
