import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 shadow-md items-center">
            <Link href="/" className="text-lg font-bold">
              amazona
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright 2022 Amazona
        </footer>
      </div>
    </>
  );
}
