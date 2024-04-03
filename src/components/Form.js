import React, { useState, useEffect } from 'react'
import Input from './InputComponent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import { useParams, useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { app, auth } from '../config/firebase.config';
import { getDatabase, ref, set, push,  get } from 'firebase/database'

const Form = () => {
  const navigate = useNavigate()
  // let [user, setUser] = useState("");
  // let readUserData = async (email) => {
  //   var atIndex = email.indexOf("@");
  //   var newUserEmail = email.substring(0, atIndex);
  //   const database = getDatabase(app);
  //   const databaseRef = ref(database, `users/${newUserEmail}`);
  // };
  // useEffect(() => {
  //   auth.onAuthStateChanged((userCred) => {
  //     let acountUser = userCred.email;
  //     readUserData(acountUser);
  //   });
  // }, []);

  let [visibility, setVisibility] = useState(false)
  let { status } = useParams();
  let handleVisibility = () => {
    setVisibility(!visibility)
  }

  const [inputValue, setInputValue] = useState({
    userId: '',
    name: '',
    email: '',
    password: ''
  });
  
  let handleChange = (event) => {
    const { name, value } = event.target
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    }
    )
  }

  const { email, password, name } = inputValue;

  const saveUser = async () => {
    let mail = email
    var atIndex = mail.indexOf('@');
    var newUserEmail = email.substring(0, atIndex);
    const db = getDatabase(app);
    const newDocRef = push(ref(db, `users/${newUserEmail}`));
    set(newDocRef, {
      userName: name,
      userEmail: email,
      userPassword: password,
      transactionHistory: [
          {
              transactionId: '',
              dateTimeStamp: '',
              amountDeposited: '',
              state: ''
          }
      ]
    }).then(() => {
      console.log('data saved sucessfully');
    }).catch((err) => {
      console.log(err)
    })
  }


  let signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("You're have been signed in successfull")
        navigate(`/${user}/dashboard`, { replace: true })
      })
      .catch((error) => {
        toast.error('failed to sign you in');
      });
  }

  let signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await sendEmailVerification(user)
        toast.success('Check your email for confirmation link')
        saveUser()
      })
      .catch((err) => {
        toast.error('failed to create your account')
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.name === '' && inputValue.email === '' && inputValue.password === '') {
      toast.error('make sure all inputs are filled')
    } else if (inputValue.name === '') {
      toast.error('Name can not be empty')
    } else if (inputValue.email === '') {
      toast.error('Email can not be empty')
    } else if (!inputValue.password.match(/[a-z]+/) || !inputValue.password.match(/[A-Z]+/) || !inputValue.password.match(/[0-9]+/) || !inputValue.password.match(/[$@#&!]+/)) {
      toast.error('Password must contain symbols, numbers and letters(uppercase and lowercase)')
    } else if (inputValue.password.length < 6) {
      toast.error('Password must be greater than six')
    } else {
      signUp();
    }
  }

  let handleSignin = (event) => {
    event.preventDefault()
    if (inputValue.email === '' && inputValue.password === '') {
      toast.error('make sure all inputs are filled')
    } else if (inputValue.email === '') {
      toast.error('Email can not be empty')
    } else if (!inputValue.password.match(/[a-z]+/) || !inputValue.password.match(/[A-Z]+/) || !inputValue.password.match(/[0-9]+/) || !inputValue.password.match(/[$@#&!]+/)) {
      toast.error('Password must contain symbols, numbers and letters(uppercase and lowercase)')
    } else {
      signIn()
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
          inputValue={inputValue.name}
          onChnage={handleChange}
        />
      }
      <Input
        type='email'
        inputplaceholder='enter your email'
        name='email'
        IconName={MailOutlineIcon}
        inputValue={inputValue.email}
        onChnage={handleChange}
      />
      <Input
        type={visibility ? 'text' : 'password'}
        inputplaceholder={status === 'up' ? 'choose your password' : 'input your password'}
        name='password'
        IconName={HttpsIcon}
        visibilityStatus={visibility}
        clickFunction={handleVisibility}
        inputValue={inputValue.password}
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
