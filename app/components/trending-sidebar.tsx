import Link from "next/link";
import { FiBell, FiBookmark, FiHome, FiMessageCircle, FiMoreHorizontal, FiSearch, FiUser, FiUsers } from "react-icons/fi";

export default function TrendingSidebar() {
    return (
        <div className="  ml-7 p-1 w-[350px] space-y-4">
            <div className="flex items-center gap-3 bg-zinc-900 px-4 py-3 rounded-full">
                <label htmlFor="search">
                    <FiSearch size={20} />
                </label>
                <input className="focus:outline-none placeholder-slate-100" type="text" placeholder="Search" id="search" autoComplete="off" />
            </div>
            <div className="p-4 bg-zinc-900 rounded-2xl space-y-3">
                <div>
                    <h1 className="text-xl font-bold">X Clone</h1>

                    <p className="text-neutral-500">A full-stack project by Peter</p>
                </div>
                <p>NextJS, TypeScript, PostgreSQL, Prisma, GraphQL, Tailwind, Clerk Authentication, Emoji Mart, Giphy GIF API.</p>
                <button className="bg-sky-500 px-4 py-2 rounded-full font-bold">peterhogler.vercel.app</button>
            </div>
            <div className=" bg-zinc-900 rounded-2xl ">
                <div className="px-4 py-3">
                    <h1 className="text-xl font-bold">Who to follow</h1>
                </div>
                <div>
                    <div className="space-y-2">
                        <div className="flex w-full items-center gap-3 px-4 py-3 hover:bg-zinc-800 duration-200">
                            <div className="h-10 w-10 rounded-lg bg-gray-50"></div>
                            <div className="leading-tight text-left">
                                <p className=" font-bold">Peter Hogler</p>
                                <p className="text-zinc-500">@Nightrider141</p>
                            </div>
                            <button className="ml-auto px-4 py-1 bg-slate-50 text-black rounded-full font-bold">Follow</button>
                        </div>

                        <div className="flex w-full items-center justify-between gap-3 px-4  py-3 hover:bg-zinc-800 duration-200">
                            <div className="h-10 w-10 rounded-lg bg-gray-50"></div>
                            <div className="leading-tight text-left">
                                <p className=" font-bold">Samantha Rose</p>
                                <p className="text-neutral-500">@SamanthaRosery</p>
                            </div>
                            <button className="ml-auto px-4 py-1 bg-slate-50 text-black rounded-full font-bold">Follow</button>
                        </div>
                    </div>
                    <div className="px-4 pb-3">
                        <button className="text-sky-500 mt-3">Show more</button>
                    </div>
                </div>
            </div>
            <div className=" bg-zinc-900 rounded-2xl space-y-3">
                <h1 className="text-xl font-bold px-4 pt-4">Trending</h1>
                <div>
                    <div className="">
                        {["Web Development", "Full Stack Development"].map((trending, idx) => (
                            <div className="px-4 py-3 hover:bg-zinc-800 last:rounded-b-2xl duration-200" key={idx}>
                                <p className="text-sm text-neutral-500">{idx + 1} · Trending</p>
                                <p>#{trending}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-neutral-500 text-sm">
                <ul className="flex flex-wrap gap-2">
                    {["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility", "Ads Info", "More", "© 2024 Peter Hogler"].map((policies, idx) => (
                        <li key={idx}>{policies}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
