import React from 'react'
import input from './input'
import HttpsIcon from '@mui/icons-material/Https';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Form = () => {
  return (
    <form className='w-1/2 bg-slate-600 flex flex-col gap-5'>
      <input
        inputType='email'
        inputName='email'
        placeholder='enter your email'
        iconName={MailOutlineIcon}
      />
      <input
        inputType='password'
        inputName='password'
        placeholder='choose your password'
        iconName={HttpsIcon}
      />
    </form>
  )
}

export default Form
