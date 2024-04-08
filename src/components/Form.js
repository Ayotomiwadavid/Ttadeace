import React, { useState } from 'react'
import Input from './InputComponent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import { useParams } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, signUp } from '../config/controller';
import { useNavigate } from 'react-router-dom';


const Form = () => {

  //defining use navigate to channge location after sign in
  const navigate = useNavigate()

  //Getting the parameter of the current form to know if it's login or sign up
  let { status } = useParams();

//Seting the visibillity of name inut field to change form status
  let [visibility, setVisibility] = useState(false)

  let handleVisibility = () => {
    setVisibility(!visibility)
  }

  const [userData, setUserData] = useState({
    userId: '',
    name: '',
    email: '',
    password: ''
  });

  //HANDLING FORM CHANGES
  let handleChange = (event) => {
    const { name, value } = event.target
    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    }
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.name === '' && userData.email === '' && userData.password === '') {
      toast.error('make sure all inputs are filled')
    } else if (userData.name === '') {
      toast.error('Name can not be empty')
    } else if (userData.email === '') {
      toast.error('Email can not be empty')
    } else if (!userData.password.match(/[a-z]+/) || !userData.password.match(/[A-Z]+/) || !userData.password.match(/[0-9]+/) || !userData.password.match(/[$@#&!]+/)) {
      toast.error('Password must contain symbols, numbers and letters(uppercase and lowercase)')
    } else if (userData.password.length < 6) {
      toast.error('Password must be greater than six')
    } else {
      signUp(userData);
    }
  }

  let handleSignin = (event) => {
    event.preventDefault()
    if (userData.email === '' && userData.password === '') {
      toast.error('make sure all inputs are filled')
    } else if (userData.email === '') {
      toast.error('Email can not be empty')
    } else if (!userData.password.match(/[a-z]+/) || !userData.password.match(/[A-Z]+/) || !userData.password.match(/[0-9]+/) || !userData.password.match(/[$@#&!]+/)) {
      toast.error('Password must contain symbols, numbers and letters(uppercase and lowercase)')
    } else {
      signIn(userData, navigate)
    }
  }


  return (
    <form className='w-full flex flex-col items-center justify-center md:px-[15px] md:py-[20px]' onSubmit={status === 'up' ? handleSubmit : handleSignin}>
      {
        status === 'up' && <Input
          type='text'
          inputplaceholder='full name'
          name='name'
          IconName={PersonOutlineIcon}
          inputValue={userData.name}
          onChnage={handleChange}
        />
      }
      <Input
        type='email'
        inputplaceholder='enter your email'
        name='email'
        IconName={MailOutlineIcon}
        inputValue={userData.email}
        onChnage={handleChange}
      />
      <Input
        type={visibility ? 'text' : 'password'}
        inputplaceholder={status === 'up' ? 'choose your password' : 'input your password'}
        name='password'
        IconName={HttpsIcon}
        visibilityStatus={visibility}
        clickFunction={handleVisibility}
        inputValue={userData.password}
        onChnage={handleChange}
      />
      <div className='w-full text-xl items-center justify-center md:justify-start p-[10px] md:px-[10vw] mt-[10px] flex '>
        <button type='submit' className='w-full capitalize gap-2 font-bold flex items-center justify-center rounded-md h-[45px] p-3 md:w-[150px] md:p-5 text-center text-white bg-blue-text-color'>
          sign {status}
        </button>
      </div>
    </form>
  )
}

export default Form
