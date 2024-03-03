import React from 'react'
import input from './input'
import HttpsIcon from '@mui/icons-material/Https';

const Form = () => {
  return (
    <form>
      <input 
        inputType='email'
        inputName='email'
        placeholder='enter your email'
        iconName={HttpsIcon}
      />
    </form>
  )
}

export default Form
