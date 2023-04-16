import Navbar from '@/src/components/Navbar';
import React from 'react';

type Props = {
  children: any;
  logo: string;
  pageProps: any;
};

function DefaultLayout({ logo, children, ...pageProps }: Props) {
  console.log('pageProps Layout: ', pageProps);

  return (
    <div>
      <Navbar />
      <div id='content' className='container px-4 mx-auto h-full'>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
