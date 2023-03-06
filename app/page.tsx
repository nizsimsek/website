"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-4">
      <div className="flex self-center h-full m-auto">
        <div className="flex flex-col h-full justify-evenly">
          <div className="flex flex-col justify-between">
            <span className="text-base sm:text-lg lg:text-xl">Hi all. I am</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl mt-2">
              Nizamettin
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl mb-2">
              Şimşek
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl text-c-turquoise">
              &#62; Front-end developer
            </span>
          </div>
          <div className="text-sm sm:text-base lg:text-lg">
            <span className="text-cl-muted">
              &#47;&#47; find my profile on Github:
            </span>
            <div>
              <span className="text-c-purple">const </span>
              <span className="text-c-turquoise">githubLink </span>
              <span>= </span>
              <Link
                href="https://github.com/nizsimsek"
                className="text-c-pink hover:text-white"
              >
                <span style={{ overflowWrap: "anywhere" }}>
                  “https://github.com/nizsimsek”
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
