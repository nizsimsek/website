'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Footer from './Footer';

export default function MobileMenu({
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
    <header className="flex flex-col text-c-muted">
      <Link
        href="/"
        className={
          'border-b-2 border-c-border px-4 py-4 h-full flex items-center' +
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
          'border-b-2 border-c-border px-4 py-4 h-full flex items-center' +
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
          'border-b-2 border-c-border px-4 py-4 h-full flex items-center' +
          (activeSegment == 'projects' ? ' text-white' : '')
        }
        onClick={() => {
          setLoading(true);
          setMenuIsOpen(false);
        }}
      >
        _projects
      </Link>
      <Link
        href="/contact"
        className={
          'border-b-2 border-c-border px-4 py-4 h-full flex items-center lg:hidden' +
          (activeSegment == 'contact' ? ' text-white' : '')
        }
        onClick={() => {
          setLoading(true);
          setMenuIsOpen(false);
        }}
      >
        _contact-me
      </Link>
    </header>
  );
}
