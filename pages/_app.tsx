import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import { Hydrate, QueryClientProvider, QueryClient } from 'react-query';
import React from 'react';
import DefaultLayout from '@/Layout/DefaultLayout';
export const config = {
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 60 * 1000,
      cacheTime: 5 * 60 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <>
          <main className='h-[100vh] bg-red-300'>
            <DefaultLayout {...pageProps}>
              <Component {...pageProps} />
            </DefaultLayout>
          </main>
        </>
      </Hydrate>
    </QueryClientProvider>
  );
}
