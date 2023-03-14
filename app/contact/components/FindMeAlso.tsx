"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiInstagramFill,
  RiDiscordFill,
} from "react-icons/ri";
import { ImTwitter } from "react-icons/im";

export const FindMeAlso = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col h-auto mt-1 lg:mt-0 lg:h-full">
      <div className="flex items-center bg-c-ghost lg:bg-transparent h-auto py-1 px-4 mx-1 lg:m-0 lg:border-c-border lg:border-b-2 lg:py-2 lg:w-64">
        <span
          className="flex items-center gap-2 cursor-pointer text-cl-muted hover:text-white"
          onClick={() => {
            setShow(() => {
              return !show;
            });
          }}
        >
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} find-me-also-in
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1 lg:pb-4">
          <Link
            href="https://instagram.com/ilahinizo"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <RiInstagramFill />
            <span className="ml-1">@ilahinizo</span>
          </Link>
          <Link
            href="https://twitter.com/ilahinizo"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <ImTwitter />
            <span className="ml-1">@ilahinizo</span>
          </Link>
          <Link
            href="https://discord.com/users/570262946991570947"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <RiDiscordFill />
            <span className="ml-1">-Nizz#7581</span>
          </Link>
        </div>
      )}
    </div>
  );
};
