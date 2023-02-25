'use client';
import { ImGithub, ImLinkedin2, ImTwitter } from 'react-icons/im';
import Link from 'next/link';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Footer() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <>
      {activeSegment != null && (
        <footer className="flex justify-between text-cl-muted border-t-2 border-c-border w-full h-12 flex-[0_0_3rem]">
          <div className="flex h-full w-full justify-between pl-4 lg:justify-start">
            <span className="flex items-center h-full whitespace-nowrap lg:w-60 border-r-2 border-c-border pr-4 lg:pr-0">
              find me in:
            </span>
            <div className="flex h-full">
              <span className="flex items-center h-full px-4 hover:text-white border-l-2 border-c-border lg:border-l-0">
                <Link href="https://twitter.com/ilahinizo">
                  <ImTwitter />
                </Link>
              </span>
              <span className="flex items-center h-full border-l-2 lg:border-r-2 border-c-border px-4 hover:text-white">
                <Link href="https://linkedin.com/in/nizsimsek">
                  <ImLinkedin2 />
                </Link>
              </span>
              <span className="flex items-center h-full border-l-2 border-c-border px-4 hover:text-white lg:hidden">
                <Link href="https://github.com/nizsimsek">
                  <ImGithub />
                </Link>
              </span>
            </div>
          </div>
          <div className="hidden lg:flex h-full lg:w-48">
            <span className="flex items-center h-full border-l-2 border-c-border hover:text-white lg:w-full lg:justify-center">
              <Link
                href="https://github.com/nizsimsek"
                className="flex items-center"
              >
                @nizsimsek <ImGithub className="ml-2" />
              </Link>
            </span>
          </div>
        </footer>
      )}
    </>
  );
}
