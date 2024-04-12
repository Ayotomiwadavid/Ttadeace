import React from 'react'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import Mobilenavbar from '../components/Mobilenavbar'

const Withdraw = () => {
  return (
    <main className='bg-overallBg h-lvh flex items-center justify-between w-full overflow-hidden relative'>
      <Sidebar />
      <aside className='w-[100%] relative h-[100%] flex items-center justify-center'>
        <Appbar />
        <main className='flex h-[100vh] flex-col w-full px-[10px] md:px-[20px] py-[10px] items-center justify-center overflow-hidden'>
          <section className='w-full h-[100vh] flex flex-col gap-3 items-center justify-center md:mt-14'>
                <form className='md:w-3/6 w-[90%] flex flex-col rounded-md items-center justify-center p-4 bg-blue-text-color gap-3'>
                    <div className='flex flex-col items-center justify-center p-2  md:p-5'>
                        <h1 className='font-bold font-sans text-2xl text-logo-color capitalize'>Withdraw from your tardeace acount</h1>
                        <p className='font-light font-sans text-center text-white text-lg capitalize'>To Withdraw from you need to fill in these inputs</p>
                    </div>
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='fullName' placeholder='full name' />
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='amount' placeholder='Amount To withdraw ($)' />
                    <input className='md:w-[80%] w-full h-[45px] bg-white text-lg text-logo-color rounded-md p-4 border-0 outline-none placeholder:text-xl placeholder:capitalize' type='text' name='transactiondescription' placeholder='your btc address' />
                    <input className='md:w-[80%] w-full h-[55px] bg-logo-color text-xl text-white font-sans font-bold capitalize p-3 rounded-lg cursor-pointer hover:scale-95 transition-all duration-700' type='submit' name='submit'  />
                </form>
            </section>
        </main>
      </aside>
      <Mobilenavbar />
    </main>
  )
}

export default Withdraw
