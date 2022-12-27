import '../styles/globals.css';
import type { AppProps } from 'next/app';
import StoreProvider from '../utils/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
