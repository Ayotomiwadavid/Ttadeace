import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'

const Dashboard = () => {
  return (
    <main className='bg-white h-lvh flex items-center justify-between w-full'>
      <Sidebar />
      <aside className='w-[85%] relative h-[100%] flex items-center justify-center flex-0'>
        <Appbar />
      </aside>
    </main>
  )
}

export default Dashboard
