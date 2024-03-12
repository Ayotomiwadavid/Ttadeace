import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Dashmain from '../components/Dashmain'

const Dashboard = () => {
  return (
    <main className='bg-overallBg h-lvh flex items-center justify-between w-full overflow-hidden'>
      <Sidebar />
      <aside className='w-[85%] relative h-[100%] flex items-center justify-center flex-0'>
        <Appbar />
        <Dashmain />
      </aside>
    </main>
  )
}

export default Dashboard
