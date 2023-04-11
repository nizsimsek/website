"use client";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="flex h-full w-full">
            <Image src="https://www.reactiongifs.us/wp-content/uploads/2017/12/giphy-1.gif" alt="Coding" width={300} height={200} className="w-1/2 h-1/2 m-auto" />
        </div>
    );
}
