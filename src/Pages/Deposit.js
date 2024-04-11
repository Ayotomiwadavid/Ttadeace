import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Mobilenavbar from '../components/Mobilenavbar'
import Despositmain from '../components/Despositmain'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Deposit = () => {
  return (
    <main className='bg-white h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      <ToastContainer />
      <Sidebar />
      <aside className='w-[100%] relative h-[100%] flex items-center justify-center'>
        <Appbar />
        <Despositmain />
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default Deposit
