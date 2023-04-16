import React from 'react';

type Props = {
  name: string;
  alterEgo: string;
  bgColor: string;
};

// style={cardStyles}
function Card({ name, alterEgo, bgColor }: Props) {
  return (
    <div
      className={`h-[9rem] w-[18rem] flex flex-col justify-center items-center gap-4 text-yellow-400 font-bold border-2 border-blue-900 bg-${bgColor} rounded-lg text-xl shadow-lg`}
    >
      <h2 className='w-max'>Name: {name.toUpperCase()}</h2>
      <h2 className='w-max'>Alter Ego: {alterEgo.toUpperCase()}</h2>
    </div>
  );
}

export default Card;
