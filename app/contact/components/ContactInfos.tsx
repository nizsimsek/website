"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
} from "react-icons/ri";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

export const ContactInfos = () => {
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
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} contacts
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1 lg:pb-4">
          <Link
            href="mailto:nizsimsek@gmail.com"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <RiMailFill />
            <span className="ml-1">nizsimsek@gmail.com</span>
          </Link>
          <Link
            href="https://github.com/nizsimsek"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <ImGithub />
            <span className="ml-1">@nizsimsek</span>
          </Link>
          <Link
            href="https://linkedin.com/in/nizsimsek"
            className="flex items-center h-8 text-cl-muted hover:text-white"
          >
            <ImLinkedin2 />
            <span className="ml-1">Nizamettin Şimşek</span>
          </Link>
        </div>
      )}
    </div>
  );
};
