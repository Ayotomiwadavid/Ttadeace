import React from 'react'
import cardImage from '../images/bg-card-front.png'
import Minitrade from './Minitrade'

const Balance = (props) => {
  return (
    <div className='w-full rounded-lg bg-neon-blue mb-5 flex items-center justify-between px-5 max-h-[300px] gap-10'>
      <div className=' py-5 h-full w-1/2 relative'>
        <img src={cardImage} alt='card img' className='h-[200px] w-full' />
        <div className='h-[200px] absolute top-[50%] left-[50%] transf'></div>
      </div>
      <Minitrade />
    </div>
  )
}

export default Balance
