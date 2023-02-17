'use client';
import { ImGithub, ImLinkedin2, ImTwitter } from 'react-icons/im';
import Link from 'next/link';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Footer() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <>
      {activeSegment != null && (
        <header className="flex justify-between text-c-muted border-t-2 border-c-border w-full h-12 absolute bottom-0">
          <div className="flex h-full w-full justify-between lg:justify-start">
            <span className="flex items-center h-full px-4 whitespace-nowrap">
              find me in:
            </span>
            <div className="flex h-full">
              <span className="flex items-center h-full border-l-2 border-c-border px-4">
                <Link href="https://twitter.com/ilahinizo">
                  <ImTwitter />
                </Link>
              </span>
              <span className="flex items-center h-full border-l-2 lg:border-r-2 border-c-border px-4">
                <Link href="https://linkedin.com/in/nizsimsek">
                  <ImLinkedin2 />
                </Link>
              </span>
              <span className="flex items-center h-full border-l-2 border-c-border px-4 lg:hidden">
                <Link href="https://github.com/nizsimsek">
                  <ImGithub />
                </Link>
              </span>
            </div>
          </div>
          <div className="hidden lg:flex h-full">
            <span className="flex items-center h-full border-l-2 border-c-border px-4 ">
              <Link
                href="https://github.com/nizsimsek"
                className="flex items-center"
              >
                @nizsimsek <ImGithub className="ml-2" />
              </Link>
            </span>
          </div>
        </header>
      )}
    </>
  );
}
