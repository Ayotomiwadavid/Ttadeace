import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'

const Dashboard = () => {
  return (
    <main className='bg-white relative h-lvh'>
    <Appbar />
    <Sidebar />
    </main>
  )
}

export default Dashboard
