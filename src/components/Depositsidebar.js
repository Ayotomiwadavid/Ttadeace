import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase.config';
import { readUserData } from '../config/controller';

const Depositsidebar = () => {
  let [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      let acountUser = userCred.email;
      readUserData(acountUser, setUser);
    });
  }, []);
  return (
    <div className='md:w-[20%] w-full h-fit flex flex-col gap-5 md:h-full items-center justify-center'>
      <Link to={'/deposit/' + user} className='w-full'>
        <button className='shadow-sm w-[90%] h-[55px] text-center bg-overallBg text-logo-color font-bold rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans'>crypo deposit</button>
      </Link>
      <Link to='/deposit/confirm' className='w-full'>
        <button className='shadow-lg w-[90%] h-[55px] text-center bg-neon-blue text-white rounded-md transition-all duration-700 hover:scale-90 capitalize text-lg font-sans font-bold'>confirm deposit</button>
      </Link>
    </div>
  )
}

export default Depositsidebar
