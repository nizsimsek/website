'use client';

import Link from 'next/link';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Header({
  menuIsOpen,
  setMenuIsOpen,
  loading,
  setLoading,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}) {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <header className="flex justify-between text-c-muted border-b-2 border-c-border w-full h-14">
      <div className="flex h-full w-full px-4">
        <div className="flex items-center w-full lg:w-60 lg:border-r-2 lg:border-c-border">
          <Link
            href="/"
            onClick={() => {
              setLoading(true);
              setMenuIsOpen(false);
            }}
          >
            niz-simsek
          </Link>
        </div>
        <div className="flex items-center h-full lg:hidden">
          {menuIsOpen ? (
            <RxCross2
              className="cursor-pointer text-[1.4rem]"
              onClick={() => setMenuIsOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="cursor-pointer text-[1.4rem]"
              onClick={() => setMenuIsOpen(true)}
            />
          )}
        </div>
        <div className="hidden lg:flex lg:items-center h-full">
          <Link
            href="/"
            className={
              'border-r-2 border-c-border px-8 h-full flex items-center' +
              (activeSegment == null ? ' text-white' : '')
            }
            onClick={() => {
              setLoading(true);
              setMenuIsOpen(false);
            }}
          >
            _hello
          </Link>
          <Link
            href="/about"
            className={
              'border-r-2 border-c-border px-8 h-full flex items-center' +
              (activeSegment == 'about' ? ' text-white' : '')
            }
            onClick={() => {
              setLoading(true);
              setMenuIsOpen(false);
            }}
          >
            _about-me
          </Link>
          <Link
            href="/projects"
            className={
              'border-r-2 border-c-border px-8 h-full flex items-center' +
              (activeSegment == 'projects' ? ' text-white' : '')
            }
            onClick={() => {
              setLoading(true);
              setMenuIsOpen(false);
            }}
          >
            _projects
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex whitespace-nowrap items-center justify-center px-8 h-full border-l-2 border-c-border">
        <Link
          href="/contact"
          className={
            'flex items-center h-full' +
            (activeSegment == 'contact' ? ' text-white' : '')
          }
          onClick={() => {
            setLoading(true);
            setMenuIsOpen(false);
          }}
        >
          _contact-me
        </Link>
      </div>
    </header>
  );
}
