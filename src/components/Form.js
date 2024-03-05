import React, { useState } from 'react'
import Input from './InputComponent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import { useParams } from 'react-router-dom';

const Form = () => {
  let [visibility, setVisibility] = useState(false)
  let { status } = useParams();
  let handleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <form className='w-full flex flex-col items-center justify-center md:px-[15px] md:py-[20px]'>
      <Input
        type='email'
        inputplaceholder='enter your email'
        name='email'
        IconName={MailOutlineIcon}
      />
      <Input
        type={visibility ? 'text' : 'password'}
        inputplaceholder={status === 'up' ? 'choose your password' : 'input your password'}
        name='password'
        IconName={HttpsIcon}
        visibilityStatus={visibility}
        clickFunction={handleVisibility}
      />
      {
        status === 'up' && <Input
          type={visibility ? 'text' : 'password'}
          inputplaceholder='confirm password'
          name='password'
          IconName={HttpsIcon}
          visibilityStatus={visibility}
          clickFunction={handleVisibility}
        />
      }
      <div className='w-full text-xl items-center justify-center md:justify-start p-[20px] md:px-[10vw] mt-[10px] flex '>
        <button className='w-full capitalize gap-2 font-bold flex items-center justify-center rounded-md h-[45px] p-3 md:w-[150px] md:p-5 text-center text-white bg-blue-text-color'>
          sign {status}
        </button>
      </div>
    </form>
  )
}

export default Form
