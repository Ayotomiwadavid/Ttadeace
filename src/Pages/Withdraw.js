import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Mobilenavbar from '../components/Mobilenavbar'

const Withdraw = () => {
  return (
    <main className='bg-overallBg h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      <Sidebar />
      <aside className='w-[100%] relative h-[100%] flex items-center justify-center'>
        <Appbar />
        <main className='flex flex-col w-full px-[10px] md:px-[20px] py-[10px] items-center justify-center overflow-hidden'>
          <Balance />
        </main>
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default Withdraw
