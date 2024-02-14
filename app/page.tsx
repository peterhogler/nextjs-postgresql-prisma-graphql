import ActivityStream from "./components/feed/activity-stream";
import ActivityStreamFilter from "./components/feed/activity-stream-filter";

export default function Page() {
    return (
        <div className="border-neutral-700 w-[605px]">
            <ActivityStreamFilter />
            <ActivityStream />
        </div>
    );
}
