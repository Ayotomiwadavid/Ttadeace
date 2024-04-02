import { get, getDatabase, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app, auth } from '../config/firebase.config';

const Depositsidebar = () => {
  let [user, setUser] = useState("");
  let readUserData = async (email) => {
    var atIndex = email.indexOf("@");
    var newUserEmail = email.substring(0, atIndex);
    const database = getDatabase(app);
    const databaseRef = ref(database, `users/${newUserEmail}`);
    const snapshot = await get(databaseRef);
    if (snapshot.exists()) {
      let firstuserName = Object.values(snapshot.val());
      let realName = firstuserName[0].userName;
      var atRealNameSpaceIndex = realName.indexOf(' ');
      var userName = realName.substring(0, atRealNameSpaceIndex);
      setUser(userName)
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      let acountUser = userCred.email;
      readUserData(acountUser);
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
