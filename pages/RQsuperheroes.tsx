import Card from '@/src/components/Card';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { QueryClient, dehydrate, useQuery } from 'react-query';
type Props = {
  dehydratedState: any;
};
import { SuperHero } from '@/src/interfaces/interfaces';
import fetchSuperHeroes from '@/api/fetchSuperHeroes';
import { usePosts } from '@/hooks/api/posts';

/* 
 below can be used instead of "fetchSuperHeroes"

 const getHeroes = async () =>
  await (await fetch('http://localhost:4000/superHeroes')).json();
*/

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('super-heroes', fetchSuperHeroes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      test: 'test',
    },
  };
};

function RQsuperheroes({}: Props) {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <h1>RQ heroes is loading...</h1>;
  }
  return (
    <div className='flex gap-4 py-4 h-full flex-wrap'>
      {data?.map((hero) => {
        return (
          <Card
            key={hero.id}
            name={hero.name}
            alterEgo={hero.alterEgo}
            bgColor={'red-600'}
          />
        );
      })}
    </div>
  );
}

export default RQsuperheroes;
