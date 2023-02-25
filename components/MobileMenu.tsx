'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Footer from './Footer';

export default function MobileMenu({
  menuIsOpen,
  setMenuIsOpen,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;
}) {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <header className="flex flex-col text-cl-muted">
      <Link
        href="/"
        className={
          'border-b-2 border-c-border px-4 py-3 h-full flex items-center' +
          (activeSegment == null ? ' text-white' : '')
        }
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        _hello
      </Link>
      <Link
        href="/about"
        className={
          'border-b-2 border-c-border px-4 py-3 h-full flex items-center' +
          (activeSegment == 'about' ? ' text-white' : '')
        }
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        _about-me
      </Link>
      <Link
        href="/projects"
        className={
          'border-b-2 border-c-border px-4 py-3 h-full flex items-center' +
          (activeSegment == 'projects' ? ' text-white' : '')
        }
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        _projects
      </Link>
      <Link
        href="/contact"
        className={
          'border-b-2 border-c-border px-4 py-3 h-full flex items-center lg:hidden' +
          (activeSegment == 'contact' ? ' text-white' : '')
        }
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        _contact-me
      </Link>
    </header>
  );
}
