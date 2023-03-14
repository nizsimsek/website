"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
} from "react-icons/ri";
import {
  ImGithub,
  ImLinkedin2,
  ImTwitter,
  ImCheckboxUnchecked,
  ImCheckboxChecked,
} from "react-icons/im";

export const Sidebar = ({
  technologies,
  setTechnologies,
}: {
  technologies: {
    id: number;
    name: string;
    icon: any;
    checked: boolean;
  }[];
  setTechnologies: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        icon: any;
        checked: boolean;
      }[]
    >
  >;
}) => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col h-auto">
      <div className="flex items-center bg-c-ghost lg:bg-transparent h-auto py-1 px-4 mx-1 lg:m-0 lg:border-c-border lg:border-b-2 lg:py-2 lg:w-64">
        <span
          className="flex items-center gap-2 cursor-pointer text-cl-muted hover:text-white"
          onClick={() => {
            setShow(() => {
              return !show;
            });
          }}
        >
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} projects
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1 lg:pb-4">
          <div className="flex flex-col">
            {technologies.map((technology) => {
              return (
                <div
                  className="flex items-center gap-4 text-c-muted my-2 cursor-pointer hover:text-white"
                  key={technology.id}
                  onClick={() => {
                    setTechnologies((prev) => {
                      return prev.map((tech) => {
                        if (tech.id === technology.id) {
                          return {
                            ...tech,
                            checked: !tech.checked,
                          };
                        }
                        return tech;
                      });
                    });
                  }}
                >
                  {technology.checked ? (
                    <ImCheckboxChecked fill={"#607B96"} />
                  ) : (
                    <ImCheckboxUnchecked fill={"#607B96"} />
                  )}
                  <div className="flex items-center gap-1">
                    {technology.icon}
                    <span>{technology.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
