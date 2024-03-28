import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Mobilenavbar from '../components/Mobilenavbar'

const Deposit = () => {
  return (
    <main className='bg-white h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      <Sidebar />
      <aside className='w-[100%] relative h-[100%] flex items-center justify-center'>
        <Appbar />
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default Deposit
