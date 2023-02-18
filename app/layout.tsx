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
  const [loading, setLoading] = useState(true);
  const [isDevelopmentMode, setIsDevelopmentMode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  let props = {
    menuIsOpen,
    setMenuIsOpen,
    loading,
    setLoading,
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
        {!isDevelopmentMode && <Header {...props} />}
        {!isDevelopmentMode && loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900">
              <ImSpinner className="text-5xl" />
            </div>
          </div>
        ) : (
          !isDevelopmentMode && (
            <div className={menuIsOpen ? '' : 'overflow-y-auto h-[calc(100vh_-_10.5rem)]'}>
              {menuIsOpen ? <MobileMenu {...props} /> : children}
            </div>
          )
        )}
        {!isDevelopmentMode && !loading && <Footer />}
      </body>
    </html>
  );
}
