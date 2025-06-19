import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <div className="container mx-auto p-4">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;