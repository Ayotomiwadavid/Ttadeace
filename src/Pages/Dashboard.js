import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Dashmain from '../components/Dashmain'
import Mobilenavbar from '../components/Mobilenavbar'

const Dashboard = () => {
  return (
    <main className='bg-overallBg h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      <Sidebar />
      <aside className='w-[100%] relative h-[100%] flex items-center justify-center'>
        <Appbar />
        <Dashmain />
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default Dashboard
