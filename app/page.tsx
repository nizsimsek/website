"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-4">
      <div className="flex place-content-center h-full m-auto">
        <div className="flex flex-col h-full justify-evenly w-full">
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
            <div className="max-w-xs md:max-w-none">
              <span className="text-code-orange">const </span>
              <span className="text-code-pink">githubLink </span>
              <span>= </span>
              <Link
                href="https://github.com/nizsimsek"
                className="text-code-yellow hover:text-white"
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
