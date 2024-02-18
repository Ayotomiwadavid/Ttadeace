import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import menuBar from '../images/bars with menu.png'
import cancelBtn from '../images/large cancel btn.png'

const Header = () => {
  let [showMenu, setShowMenu] = useState(false);

  let hamdleMenuClick = () =>{
    setShowMenu(!showMenu);
  }
  return (
    <header className='flex w-full h-[12vh] items-center py-1  justify-between absolute left-0 right-0 md:px-20'>
    <Logo />
    <div className='hidden items-center justify-end p-1 w-1/2 h-full gap-3 md:flex'>
    <Link to='/signin'>
      <button className='transition duration-700 outline-none text-sx capitalize text-white px-5 py-2 text-center hover:border-white hover:border-[1px] rounded-sm'>sign in</button>
    </Link>
    <Link to='/sign up'>
      <button className='transition duration-700 outline-none text-sx capitalize border-white border-[1px] bg-transparent text-white px-5 py-2 text-center rounded-sm'>sign up</button>
    </Link>
    </div>
    <div className='flex items-center mr-3  justify-center p-2 md:hidden' onClick={hamdleMenuClick}>
       {showMenu ? <img className='w-[30px] h-[30px]' src={cancelBtn} /> : <img src={menuBar} />}
    </div>
    </header>
  )
}

export default Header
