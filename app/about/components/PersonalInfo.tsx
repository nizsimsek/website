"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
} from "react-icons/ri";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

export const PersonalInfo = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={
        "flex flex-col h-auto" +
        (show ? " lg:border-b-2 lg:border-c-border" : "")
      }
    >
      <div className="flex items-center bg-c-ghost lg:bg-transparent h-auto py-1 px-4 mx-1 lg:m-0 lg:border-c-border lg:border-b-2 lg:py-2 lg:w-64">
        <span
          className="flex items-center gap-2 cursor-pointer text-cl-muted hover:text-white"
          onClick={() => {
            setShow(() => {
              return !show;
            });
          }}
        >
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} personal-info
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1 lg:pb-4">
            aaaa
        </div>
      )}
    </div>
  );
};
