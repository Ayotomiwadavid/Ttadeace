import React, { useState, useEffect } from 'react'
import cardImage from '../images/bg-card-front.png'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { app, auth } from '../config/firebase.config';
import { getDatabase, ref, get } from 'firebase/database'

const Balancecard = (props) => {
  let {currencySymbol, cardDescription, balance} = props
  
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
    <div className=' py-5 h-full md:w-1/2 relative'>
      <img src={cardImage} alt='card img' className='h-[200px] w-full' />
      <div className='h-[200px] w-full rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center'>
        <div className='w-full items-center justify-between flex px-5'>
          <h1 className='text-white text-lg capitalize font-bold p-5 md:w-[50%] px-0'>{cardDescription}</h1>
          <div className='rounded-full border-2 border-white w-[40px] h-[40px] flex items-center justify-center mb-5'>
          <Link to={'/deposit/'+user}>
          <Add
              style={{
                fontSize: '35px',
                fontWeight: 'bolder',
                color: '#fff',
                cursor: 'pointer'
              }}
            />
          </Link>
          </div>
        </div>
        <p className='text-white font-bold p-10 px-5 w-full text-left text-2xl uppercase'>{balance} {currencySymbol}</p>
      </div>
    </div>
  )
}

export default Balancecard
