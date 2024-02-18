import React from 'react'
import logo from '../images/acetradeLogo.png'
import { Grid, Typography } from '@mui/material'
import "@fontsource/noto-sans";

const Logo = () => {
  return (
    <div className='container flex items-center md:p-5 justify-start w-1/2'>
    <img src={logo} alt='logo' className='w-[70px] h-[70px] rounded-full'/>
     <span className='font-bold text-sm font-sans text-logo-color md:text-2xl'>Trade Ace</span>
    </div>
  )
}

export default Logo
