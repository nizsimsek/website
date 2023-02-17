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
        <Header {...props} />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900">
              <ImSpinner className="text-5xl" />
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto p-4">
            {menuIsOpen ? <MobileMenu {...props} /> : children}
          </div>
        )}
        {!loading && <Footer />}
      </body>
    </html>
  );
}
