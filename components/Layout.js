import Head from 'next/head';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';

// eslint-disable-next-line react/prop-types
export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  console.log(cart.cartItems.length);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // we update the value just if there is a change on cart.cartitems }, [cart.cartItems]???
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  });
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
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="text-blue-600">user</Menu.Button>
              <Menu.Items>
                <Menu.Item>Hey</Menu.Item>
              </Menu.Items>
            </Menu>
            <div>
              {/* Add the number in the cart section */}
              <Link href="/cart" className="p-2">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
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
