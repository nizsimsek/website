'use client';

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { useEffect, useState } from 'react';
import { ImSpinner } from 'react-icons/im';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDevelopmentMode, setIsDevelopmentMode] = useState(false);

  let props = {
    menuIsOpen,
    setMenuIsOpen,
  };

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {isDevelopmentMode && (
          <iframe
            src="https://fakeupdate.net/win10ue/"
            className="fixed inset-0 w-full h-full z-50"
          />
        )}
        {!isDevelopmentMode && (
          <div className="flex flex-col flex-nowrap h-full">
            <Header {...props} />
            <div className="overflow-y-auto lg:overflow-hidden scroll-smooth flex-auto mx-1 lg:mx-0">
              {menuIsOpen ? <MobileMenu {...props} /> : children}
            </div>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
