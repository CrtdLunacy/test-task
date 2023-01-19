import React, { useState } from 'react'

const Card = ({food, portions, mouseNumber, weight, comment, disable}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isDisabled, setIsDisabled] = useState( false);

  const handleFocus = () => {
    setIsFocus(!isFocus);
  }

  const handleDisable = () => {
    setIsDisabled(!isDisabled);
  }

  return (
    <div className='mb-10 relative max-w-[320px]'>
      <div
      className={`bg-white relative min-h-[509px] overflow-hidden py-[21px] pr-[64px] pl-[51px] font-extra border-4 ${!isFocus ? 'border-[#2EA8E6]' : 'border-[#D91667]'} rounded-lg ${isDisabled && 'border-gray-500'}`}
      onClick={handleFocus}
      >
        {isDisabled ? (
          <div className="absolute w-full h-full bg-white/50 z-50 left-0"></div>
        ) : null}
        <p className='text-[#666666] font-normal whitespace-nowrap'>Сказочое заморское явство</p>

        <p className='font-bold text-2xl mb-[15px]'>
          <h2 className='font-extra text-5xl'>Нямушка</h2>
          {`с ${food}`}
        </p>

        <p className='text-[#666666]'>
          <span className='font-bold'>{portions}</span> порций
        </p>

        <p className='text-[#666666]'>
          <span className={`${mouseNumber ? 'mr-1 font-bold' : null}`}>{mouseNumber ? mouseNumber : null}</span>
          {mouseNumber < 1 ? ('мышь в подарок'):null}
          {mouseNumber > 1 && mouseNumber < 5 ? ('мыши в подарок'):null}
          {mouseNumber > 4 ? ('мышей в подарок'):null}
        </p>

        <span
        className={`w-[100px] h-[100px] ${!isFocus ? 'bg-[#2EA8E6]' : 'bg-[#D91667]'} ${isDisabled && 'grayscale'} text-white rounded-full text-[42px] flex flex-col absolute z-10 bottom-3 right-5 items-center justify-center leading-10`}>
          <p>{weight}</p>
          <p>кг</p>
        </span>

        <img
          src="/src/assets/cat.webp"
          alt="kitten"
          className='absolute -bottom-20 -left-6'
        />
      </div>

      {isDisabled ? ( <p onClick={handleDisable} className='comments'>{`Печалька, с ${food} закончился.`}</p>) : null}
      {isFocus && !isDisabled ? (<p className='comments'>{comment}</p>) : null}
      {!isFocus && !isDisabled ? (
        <p onClick={handleDisable} className='comments'>Чего сидишь? Порадуй котэ, <a className='text-[#22A7E9] underline decoration-dashed' href='https://vk.com/petsshop'>купи.</a></p>
      ) : null}
    </div>
  )
}

export default Card
