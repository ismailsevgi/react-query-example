import DefaultLayout from '@/Layout/DefaultLayout';
import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from 'react-query';

export default function Home() {
  return (
    <div className='flex gap-2 p-4 '>
      <Link
        className='h-12 border rounded-lg hover:bg-red-500 font-bold text-white bg-red-600 p-2 block w-max text-center'
        href={'/superheroes'}
      >
        SUPER HEROES
      </Link>
      <Link
        className='h-12 border rounded-lg hover:bg-red-500 font-bold text-white bg-red-600 bg-red-200 p-2 block w-max text-center'
        href={'/RQsuperheroes'}
      >
        SUPER HEROES RQ
      </Link>
    </div>
  );
}
