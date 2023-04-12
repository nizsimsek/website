"use client";

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "@components/Sidebar";
import { PersonalInfo } from "./components/PersonalInfo";
import { Contact } from "./components/Contact";

export default function AboutMe() {
    const page = {
        name: "_about-me",
        components: [<Contact key="_contact" />],
        // components: [<PersonalInfo key="_personal-info" />, <Contact key="_contact" />],
    };

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <Sidebar page={page} />
            <div className="flex flex-col w-full h-full">
                <div className="hidden lg:flex flex-col w-full border-b-2 border-c-border">
                    <span className="flex items-center justify-between p-2 w-fit border-r-2 border-c-border text-cl-muted">
                        <span className="line-clamp-1">_about-me</span>
                        <RxCross2 className="ml-10" />
                    </span>
                </div>
                {/* <div className="flex w-full h-auto lg:overflow-y-auto"> */}
                <div className="flex h-full w-full">
                    <Image src="https://www.reactiongifs.us/wp-content/uploads/2019/02/Computer-Old-People.gif" alt="Coding" width={300} height={200} className="w-full lg:w-2/3 h-auto m-auto object-contain" />
                </div>
            </div>
        </div>
    );
}
