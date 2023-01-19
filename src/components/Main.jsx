import React, { useState } from 'react'
import Card from './Card'

const API = [
  {
    food: 'фуа-гра',
    portions: 10,
    mouseNumber: 0,
    weight: '0,5',
    comment: 'Печень утки разварная с артишоками.',
  },
  {
    food: 'рыбой',
    portions: 40,
    mouseNumber: 2,
    weight: '2',
    comment: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    food: 'курой',
    portions: 100,
    mouseNumber: 5,
    weight: '5',
    comment: 'Филе из цыплят с трюфелями в бульоне.',
  }
];

const Main = () => {
  const [data, setData] = useState(API);

  return (
    <main>
      <section
        id='cats'
        className="bg-[url('/src/assets/back.webp')] w-full h-full min-h-[1080px]"
      >
        <h2
          className='text-4xl text-center text-white font-thin tracking-[5px] mb-[25px]'
        >Ты сегодня покормил кота?</h2>

        <div className='xl:w-[1120px] md:w-[850px] md:flex-wrap md:justify-center md:space-x-10 w-[300px] flex-col mx-auto flex md:flex-row justify-between'>
          {data.map(item => (
             <Card
              key={item.food}
              food={item.food}
              portions={item.portions}
              mouseNumber={item.mouseNumber}
              weight={item.weight}
              comment={item.comment}
             />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main
