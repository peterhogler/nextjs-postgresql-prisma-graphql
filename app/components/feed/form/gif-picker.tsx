"use client";

import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import { MdOutlineGifBox } from "react-icons/md";

const giphyFetch = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY as string);

export default function GIFPickerComponent({ onGIFSelect }: { onGIFSelect: any }) {
    const [showGifPicker, setShowGifPicker] = useState(false);
    const [searchTerm, setSearchTerm] = useState("Dog");

    const fetchGifs = (offset: number) => giphyFetch.search(searchTerm, { offset, limit: 10 });

    return (
        <div className="relative">
            <div className="hover:bg-sky-900/50 rounded-full p-1 cursor-pointer" onClick={() => setShowGifPicker(!showGifPicker)}>
                <MdOutlineGifBox className="text-sky-500" size={20} />
            </div>
            <p>
                <a href="https://giphy.com/gifs/lap-QvBoMEcQ7DQXK">via GIPHY</a>
            </p>
            {showGifPicker && (
                <div className="absolute top-9 bg-white rounded-lg text-black">
                    <input type="text" value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} placeholder="Search for GIFs" className="gif-search-input" />
                    <div className="h-max-[300px] overflow-scroll">
                        <Grid
                            fetchGifs={fetchGifs}
                            width={400}
                            columns={3}
                            gutter={6}
                            onGifClick={(gif, e) => {
                                e.preventDefault();
                                console.log(gif);
                                // onGIFSelect(gif);
                                setShowGifPicker(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
