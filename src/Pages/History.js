import React from 'react'
import Appbar from '../components/Appbar'
import Mobilenavbar from '../components/Mobilenavbar'
import MainTable from '../components/Table'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <main className='bg-overallBg h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      {/* <Sidebar /> */}
      <aside className='w-[100%] relative h-[100%] flex flex-col items-center justify-center'>
        <Appbar />
        <section className='w-full h-[100vh] px-5 flex flex-col items-center justify-start mt-[70px] md:mt-[100px]'>
          <div className='w-full flex items-center justify-between py-5'>
            <h1 className='text-2xl font-bold font-sans text-logo-color capitalize'>check your previous transactions with us</h1>
            <Link to='/dashboard' className='capitalize w-[150px] h-[45px] hidden md:flex items-center justify-center bg-neon-blue text-white font-sans text-lg rounded-lg'>back to home</Link>
          </div>
          <MainTable />
        </section>
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default History
