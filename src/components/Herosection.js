import React from 'react'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <section className='flex flex-col-reverse w-ful h-lvh items-center justify-center md:flex md:flex-row' data-aos="fade-up">
      <div className='w-full h-full gap-1 items-left justify-center flex flex-col p-2 md:p-5 md:w-1/2 md:h-1/2 md:gap-0'>
        <h1 className='text-3xl font-bold font-gilroy w-full text-start p-2 text-logo-color md:p-5 md:w-4/4 md:text-6xl'>Your gateway to <span className='text-blue-text-color '>Algo-Trading</span> sucess</h1>
        <p className='font-light text-small-text-color text-start text-sm w-full px-5 md:w-4/5'>Trade Ace is the world's number one solution for automated cryptocurrency trading</p>
        <form className='flex flex-col p-5 w-full  gap-2 md:flex md:flex-row'>
          <input type='email' className='h-11 w-full p-5 my-5 md:m-0  outline-none border-none shadow-xl focus:outline-neon-blue rounded-md mr-2 md:w-1/2' placeholder='Email' />
          <input type='submit' className=' flex items-center justify-center h-11 w-63 bg-blue-text-color p-3 rounded-md text-center outline-none border-none shadow-xl text-white' value='Sign up now'/>
        </form>
      </div>
      <div className='hidden h-1/2 w-full md:h-full md:w-1/2 md:block'>
        <img className='w-full h-full' src='https://www.wpbeginner.com/wp-content/uploads/2018/09/bestaccountingsoftware.png' alt='hero section image'/>
      </div>
    </section>
  )
}

export default Herosection
