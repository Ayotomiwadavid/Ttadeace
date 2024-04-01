import React from 'react'

const Depositsidebar = () => {
  return (
    <div className='md:w-[20%] w-full h-fit flex flex-col gap-5 md:h-full items-center justify-center'>
      <button className='shadow-sm w-[90%] h-[55px] text-center bg-overallBg text-logo-color font-bold rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans'>crypo deposit</button>
      <button className='shadow-lg w-[90%] h-[55px] text-center bg-neon-blue text-white rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans font-bold'>confirm deposit</button>
    </div>
  )
}

export default Depositsidebar
