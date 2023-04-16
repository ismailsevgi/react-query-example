import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';

type Props = {};

type SpaceXData = {
  links: {
    patch: {
      small: string;
      medium: string;
      large: string;
    };
  };
};

const getSpaceXData = async () =>
  await (await fetch('https://api.spacexdata.com/v4/launches/latest')).json();

function Navbar({}: Props) {
  const { data, isLoading, isFetching } = useQuery<SpaceXData>(
    'spacex',
    getSpaceXData
  );

  return (
    <div className='flex justify-between w-full p-4 bg-slate-400 border-4 border-b-red-900 shadow-orange-100 shadow-sm '>
      {!isLoading && (
        <Image
          src={data?.links.patch.small}
          alt='somt'
          width={100}
          height={100}
        />
      )}
      <h1 className='container w-max  mx-auto text-red-600 h-24 tracking-wide   text-4xl font-bold p-4 flex items-center'>
        <Link href={'/'}>
          <span>HELLO to React Query Example</span>
        </Link>
      </h1>
    </div>
  );
}

export default Navbar;
