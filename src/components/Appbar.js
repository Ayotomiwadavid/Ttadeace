import React, { useEffect, useState } from 'react'
import ListIcon from '@mui/icons-material/List';
import logo from '../images/acetradeLogo.png'
import { auth } from '../config/firebase.config';

const Appbar = () => {
    let [user, setUser] = useState(null)
    useEffect(() =>{
        auth.onAuthStateChanged((userCred) => {
            let acountUser = userCred.email
            setUser(acountUser)
        })
    }, [])

    return (
        <div className='border-2 border-solid border-border-color w-full p-9'>
            <div>
                <ListIcon />
                <div className='flex items-center md:p-5 justify-start w-1/2'>
                    <img src={logo} alt='logo' className='w-[70px] h-[70px] rounded-full' />
                    <span className='font-bold text-sm font-sans text-logo-color md:text-2xl'>wecome, {user}</span>
                </div>
            </div>
        </div>
    )
}

export default Appbar
