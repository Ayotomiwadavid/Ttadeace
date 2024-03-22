import React from 'react'
import Analytics from './Analytics'
import Balance from './Balance'

const Dashmain = () => {
  return (
    <main className='flex flex-col w-full h-fit mt-[100px] md:mt-[180px] px-[10px] md:px-[20px] py-[20px] items-center justify-center overflow-auto'>
      <Balance />
      <Analytics />
    </main>
  )
}

export default Dashmain
