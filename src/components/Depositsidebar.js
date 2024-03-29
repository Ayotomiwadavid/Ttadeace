import React from 'react'

const Depositsidebar = () => {
  return (
    <div className='w-[20%] flex flex-col gap-5 h-full items-center justify-center'>
      <button className='shadow-sm w-[90%] h-[55px] text-center bg-overallBg text-logo-color font-bold rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans'>crypo deposit</button>
      <button className='shadow-lg w-[90%] h-[55px] text-center bg-neon-blue text-white rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans font-bold'>confirm deposit</button>
    </div>
  )
}

export default Depositsidebar
