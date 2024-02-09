"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { MdOutlineGifBox } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import useDebounce from "@/hooks/useDebounce";

const API_KEY = process.env.NEXT_PUBLIC_TENOR_API_KEY as string;
const clientkey = "x-clone---tenor-1707471687467";

export default function GIFPickerComponent({ onGIFSelect }: { onGIFSelect: React.Dispatch<SetStateAction<string>> }) {
    const [showGifPicker, setShowGifPicker] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("dog");
    const [searchedGIF, setSearchedGIF] = useState<any>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (!showGifPicker) return;

        const abortController = new AbortController();
        const { signal } = abortController;

        fetchCategories(signal);

        return () => {
            abortController.abort();
        };
    }, [showGifPicker]);

    useEffect(() => {
        if (!debouncedSearch) return;

        const abortController = new AbortController();
        const { signal } = abortController;

        fetchGIF(signal);
    }, [debouncedSearch]);

    const fetchCategories = async (signal: AbortSignal) => {
        const url = `https://tenor.googleapis.com/v2/categories?key=${API_KEY}&client_key=${clientkey}&limit=20`;
        const response = await fetch(url, {
            signal,
        });

        const { tags } = await response.json();
        setCategories(tags as Category[]);
    };

    const fetchGIF = async (signal: AbortSignal) => {
        const url = `https://tenor.googleapis.com/v2/search?q=${debouncedSearch}&key=${API_KEY}&client_key=${clientkey}&limit=20`;
        const response = await fetch(url, { signal });
        const { results } = await response.json();
        setSearchedGIF(results);
    };

    return (
        <div className="relative">
            <div className="hover:bg-sky-900/50 rounded-full p-1 cursor-pointer" onClick={() => setShowGifPicker(!showGifPicker)}>
                <MdOutlineGifBox className="text-sky-500" size={25} />
            </div>
            {showGifPicker && (
                <div className="absolute space-y-2 top-10 text-black rounded-lg overflow-hidden  bg-neutral-900 p-3 z-40">
                    <div className="flex items-center  bg-neutral-800 text-neutral-400 rounded-md py-[0.3rem] px-2">
                        <label htmlFor="search">
                            <FiSearch size={18} />
                        </label>
                        <input className="indent-2 focus:outline-none" type="text" id="search" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder="Search for GIFs" />
                    </div>
                    <div className="w-[300px]">
                        {!search ? <div className="text-neutral-400">Categories</div> : <div className="text-neutral-400">Search: {search}</div>}
                        <div className="w-full flex flex-wrap  max-h-[358px]  overflow-scroll p-1 bg-neutral-900 text-neutral-400 overflow-x-hidden">
                            {categories &&
                                !search &&
                                categories.map((category: Category) => {
                                    return (
                                        <div
                                            className="relative h-[100px] w-1/4 cursor-pointer"
                                            onClick={() => {
                                                setSearch(category.searchterm);
                                            }}
                                            key={category.searchterm}>
                                            <Image src={category.image} layout="fill" objectFit="cover" alt={category.searchterm} />
                                            <p className="absolute left-0 bottom-0 text-xs text-white bg-black bg-opacity-50 w-full text-center">{category.searchterm}</p>
                                        </div>
                                    );
                                })}
                            {search &&
                                searchedGIF &&
                                searchedGIF.map((gif: any) => {
                                    return (
                                        <div
                                            className="relative h-[100px] w-1/3 cursor-pointer"
                                            onClick={() => {
                                                onGIFSelect(gif.media_formats.gif.url);
                                                setShowGifPicker(false);
                                            }}
                                            key={gif.id}>
                                            <Image src={gif.media_formats.nanogif.url} layout="fill" objectFit="cover" alt={gif.content_description} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
