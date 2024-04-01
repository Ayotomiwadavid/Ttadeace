import React from 'react'
import Analytics from './Analytics'
import Balance from './Balance'

const Dashmain = () => {
  return (
    <main className='flex flex-col w-full mt-[380px] md:mt-[380px] px-[10px] md:px-[20px] py-[20px] items-center justify-center overflow-auto'>
      <Balance />
      <Analytics />
    </main>
  )
}

export default Dashmain
