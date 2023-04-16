import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@/src/components/Card';

interface dataObj {
  id: number;
  name: string;
  alterEgo: string;
  bgColor: string;
}

type Props = {
  superheroes: dataObj[];
};

export const getStaticProps = async () => {
  const { data: superheroes } = await axios.get(
    'http://localhost:4000/superHeroes'
  );

  return {
    props: {
      superheroes,
    },
    revalidate: 10,
  };
};

function Superheroes({ superheroes }: Props) {
  if (!superheroes) {
    return <h1>superheroes is loading</h1>;
  }

  return (
    <div className='flex gap-4 py-4 h-full flex-wrap'>
      {superheroes?.map((obj) => (
        <Card
          key={obj.id}
          name={obj.name}
          alterEgo={obj.alterEgo}
          bgColor={'red-600'}
        />
      ))}
    </div>
  );
}

export default Superheroes;
