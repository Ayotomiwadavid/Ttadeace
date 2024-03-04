import React from 'react'
import Input from './InputComponent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import Button from './Button'

const Form = () => {
  return (
    <form className='w-full flex flex-col items-center justify-center px-[15px] py-[30px]'>
      <Input
        type='email'
        inputplaceholder='enter your email'
        name='email'
        IconName={MailOutlineIcon}
      />
      <Input
        type='password'
        inputplaceholder='choose your password'
        name='password'
        IconName={HttpsIcon}
      />
      <div className='w-full items-center justify-start px-[10vw] mt-[10px]'>
        <Button
          buttonContent="get started"
        />
      </div>
    </form>
  )
}

export default Form
