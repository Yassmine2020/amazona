/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import StoreProvider from '../utils/Store';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
