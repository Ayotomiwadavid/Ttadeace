import React, { useState } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'

const SignIn = () => {
  let { status } = useParams();
  let [stateFormStatus, setFormStatus] = useState(status);
  let changeFormState = () => {
    setFormStatus(status);
  }

  return (
    <div className='w-full'>
      <Header
        navItems={false}
      />
      <main className='flex w-full items-center justify-between h-lvh'>
        <div className='flex flex-col w-full md:w-1/2'>
          <div className='hidden px-10 mt-10 md:flex w-full items-center justify-start gap-10'>
            <Link to='/sign/in'>
              <span className={status === 'up' ? 'font-bold font-sans text-2xl text-gray-500 capitalize cursor-pointer' : 'font-bold font-sans text-[45px] text-logo-color capitalize cursor-pointer'} onClick={changeFormState}>sign in</span>
            </Link>
            <Link to='/sign/up'>
              <span className={status === 'up' ? 'font-bold font-sans text-[45px] text-logo-color capitalize cursor-pointer' : 'font-bold font-sans text-2xl text-gray-500 capitalize cursor-pointer'} onClick={changeFormState}>sign up</span>
            </Link>
          </div>
          <div className='px-[5vw] py-[35px] flex items-center justify-start md:hidden'>
            <h4 className='w-full text-left text-logo-color text-2xl font-sans font-bold capitalize'>{status === 'up' ? "join us now" : "welcome back!"}</h4>
          </div>
          <Form />
          {
            status === 'up' && <div className='w-full px-[15px] py-[15px] flex items-center justify-center'>
              <input type='checkbox' className='mx-[10px] w-[15px] h-[15px]' />
              <p className='w-6/6 text-sm md:text-lg text-logo-color capitalize items-end justify-end mt-[15px]  md:w-4/6 '>i accept the <Link to='/termsandconditions' className='text-blue-text-color underline'>terms & conditions</Link> and confirm that I'm 18yrs or older</p>
            </div>
          }
          {
            status != 'up' && <Link to='/resetPassword' className='w-full text-center text-lg capitalize font-sans text-blue-text-color underline'>forgotten password?</Link>
          }
          <aside className='flex w-full absolute bottom-0 md:hidden'>
            <Link to='/sign/up' className='flex items-center justify-center gap-y-3 w-1/2 bg-blue-text-color'>
              <div className='flex flex-col gap-y-3 px-2 md:px-[5vw] py-4 w-full'>
                <h1 className='font-sans font-bold text-xl md:text-3xl capitalize w-full text-center md:text-end md:pr-7 text-overallBg'>sign up now</h1>
                <p className='font-sans font-light text-overallBg w-full text-end pr-7 hidden md:block'>to discover a more efficient way to trade</p>
              </div>
            </Link>
            <Link to='/sign/in' className='flex items-center justify-center w-1/2 bg-white'>
              <div className='flex flex-col gap-y-3 px-2 md:px-[5vw] py-4 w-full'>
                <h1 className='font-sans font-bold text-xl md:text-3xl capitalize w-full text-center md:text-start md:pl-7 text-logo-color'>sign in</h1>
                <p className='font-sans font-light text-logo-color w-full text-start pl-7 hidden md:block'>to start making profit from trade ace</p>
              </div>
            </Link>
          </aside>
        </div>
        <div className='hidden h-1/2 w-full md:h-full md:w-1/2 md:block'>
          <img className='w-full h-full' src='https://www.wpbeginner.com/wp-content/uploads/2018/09/bestaccountingsoftware.png' alt='hero section image' />
        </div>
      </main>
    </div>
  )
}

export default SignIn
