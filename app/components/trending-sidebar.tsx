import Link from "next/link";
import { FiBell, FiBookmark, FiHome, FiMessageCircle, FiMoreHorizontal, FiSearch, FiUser, FiUsers } from "react-icons/fi";

export default function TrendingSidebar() {
    return (
        <div className="ml-4 p-2 w-[350px] space-y-4">
            <div className="flex items-center gap-3 bg-neutral-900 px-4 py-3 rounded-full">
                <label htmlFor="search">
                    <FiSearch size={20} />
                </label>
                <input className="focus:outline-none placeholder-slate-100" type="text" placeholder="Search" id="search" autoComplete="off" />
            </div>
            <div className="p-4 bg-neutral-900 rounded-2xl space-y-3">
                <h1 className="text-xl font-bold">X Clone by Peter</h1>
                <p>NextJS, TypeScript, PostgreSQL, Prisma, GraphQL, Tailwind, React Hook Forms, Zod</p>
                <button className="bg-sky-500 px-4 py-2 rounded-full font-bold">peterhogler.vercel.app</button>
            </div>
            <div className="p-4 bg-neutral-900 rounded-2xl space-y-3">
                <h1 className="text-xl font-bold">Who to follow</h1>
                <div>
                    <div className="space-y-5">
                        <div className="flex w-full items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gray-50"></div>
                            <div className="leading-tight text-left">
                                <p className=" font-bold">Peter Hogler</p>
                                <p className="text-neutral-500">@Nightrider141</p>
                            </div>
                            <button className="ml-auto px-4 py-1 bg-slate-50 text-black rounded-full font-bold">Follow</button>
                        </div>
                        <div className="flex w-full items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gray-50"></div>
                            <div className="leading-tight text-left">
                                <p className=" font-bold">Joe Doe</p>
                                <p className="text-neutral-500">@JoesBar</p>
                            </div>
                            <button className="ml-auto px-4 py-1 bg-slate-50 text-black rounded-full font-bold">Follow</button>
                        </div>
                        <div className="flex w-full items-center justify-between gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gray-50"></div>
                            <div className="leading-tight text-left">
                                <p className=" font-bold">Samantha Rose</p>
                                <p className="text-neutral-500">@SamanthaRosery</p>
                            </div>
                            <button className="ml-auto px-4 py-1 bg-slate-50 text-black rounded-full font-bold">Follow</button>
                        </div>
                    </div>
                    <button className="text-sky-500 mt-3">Show more</button>
                </div>
            </div>
            <div className="text-neutral-500 text-sm">
                <ul className="flex flex-wrap gap-2">
                    {["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility", "Ads Info", "More", "© 2024 Peter Hogler"].map((policies) => (
                        <li>{policies}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
