import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

const SignIn = () => {
  return (
    <>
      <Header 
        navItems = 'false'
      />
      <main className='flex w-full items-center justify-between h-lvh'>
        <Form />
        <div className='hidden h-1/2 w-full md:h-full md:w-1/2 md:block'>
          <img className='w-full h-full' src='https://www.wpbeginner.com/wp-content/uploads/2018/09/bestaccountingsoftware.png' alt='hero section image' />
        </div>
      </main>
    </>
  )
}

export default SignIn
