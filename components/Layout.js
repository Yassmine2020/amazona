import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav>
            {/* <Link href="/" className="text-lg font-bold">
              amazona
            </Link> */}
            <Link href="/">
              <a className="text-lg font-bold">Home</a>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
