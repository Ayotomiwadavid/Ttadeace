import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

const SignIn = () => {
  return (
    <div className='w-full'>
      <Header
        navItems={false}
      />
      <main className='flex w-full items-center justify-between h-lvh'>
        <div className='flex flex-col w-1/2'>
          <div className='px-10 py-14 flex w-full items-center justify-start gap-10'>
            <span className='font-bold font-sans text-3xl text-logo-color capitalize cursor-pointer'>sign up</span>
            <span className='font-bold font-sans text-5xl text-logo-color capitalize cursor-pointer'>sign in</span>
          </div>
          <Form />
        </div>
        <div className='hidden h-1/2 w-full md:h-full md:w-1/2 md:block'>
          <img className='w-full h-full' src='https://www.wpbeginner.com/wp-content/uploads/2018/09/bestaccountingsoftware.png' alt='hero section image' />
        </div>
      </main>
    </div>
  )
}

export default SignIn
