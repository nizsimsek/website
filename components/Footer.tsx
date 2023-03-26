"use client";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";
import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";

export default function Footer({ menuIsOpen }: { menuIsOpen: boolean }) {
    const activeSegment = useSelectedLayoutSegment();
    return (
        <>
            <footer
                className={
                    (activeSegment == null && !menuIsOpen
                        ? "hidden "
                        : "flex ") +
                    "lg:flex justify-between text-cl-muted border-t-2 border-c-border w-full h-12 flex-[0_0_3rem]"
                }
            >
                <div className="flex h-full w-full justify-between pl-4 lg:justify-start">
                    <span className="flex items-center h-full whitespace-nowrap lg:w-60 border-r-2 border-c-border pr-4 lg:pr-0">
                        find me in:
                    </span>
                    <div className="flex h-full">
                        <span className="flex items-center h-full px-4 hover:text-white border-l-2 border-c-border lg:border-l-0">
                            <Link
                                href="https://twitter.com/ilahinizo"
                                legacyBehavior
                            >
                                <a className="flex items-center" alt="Twitter">
                                    <ImTwitter />
                                </a>
                            </Link>
                        </span>
                        <span className="flex items-center h-full border-l-2 lg:border-r-2 border-c-border px-4 hover:text-white">
                            <Link
                                href="https://linkedin.com/in/nizsimsek"
                                legacyBehavior
                            >
                                <a className="flex items-center" alt="LinkedIn">
                                    <ImLinkedin2 />
                                </a>
                            </Link>
                        </span>
                        <span className="flex items-center h-full border-l-2 border-c-border px-4 hover:text-white lg:hidden">
                            <Link
                                href="https://github.com/nizsimsek"
                                legacyBehavior
                            >
                                <a className="flex items-center" alt="Github">
                                    <ImGithub />
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="hidden lg:flex h-full lg:w-48">
                    <span className="flex items-center h-full border-l-2 border-c-border hover:text-white lg:w-full lg:justify-center">
                        <Link
                            href="https://github.com/nizsimsek"
                            className="flex items-center"
                            legacyBehavior
                        >
                            <a className="flex items-center" alt="Github">
                                @nizsimsek <ImGithub className="ml-2" />
                            </a>
                        </Link>
                    </span>
                </div>
            </footer>
        </>
    );
}
