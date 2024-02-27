import React from 'react'
import differenceImg from '../images/counts.PNG'

const Difference = () => {
  return (
    <div className='flex-col-reverse items-center justify-center w-full py-[20px] px-[5vw] md:px-[10vw] md:py-[50px] md:flex'>
    <section className='flex flex-col items-start justify-center w-full md:w-1/2'>
        <h1>What makes Trade Ace different?</h1>
        <div></div>
    </section>
    <aside className='relative flex items-center justify-center w-1/2'>
        <img src={differenceImg} alt='img' className='absolute right-0 top-0 left-0 w-full'/>
    </aside>
    </div>
  )
}

export default Difference
