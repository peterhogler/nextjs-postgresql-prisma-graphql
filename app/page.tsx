import FeedStream from "./components/feed/feed-stream";
import NavigationSidebar from "./components/navigation-sidebar";
import TrendingSidebar from "./components/trending-sidebar";

export default function Home() {
    return (
        <main className="flex flex-1 ">
            <div className="max-w-7xl flex m-auto flex-1 h-full">
                <NavigationSidebar />
                <FeedStream />
                <TrendingSidebar />
            </div>
        </main>
    );
}
