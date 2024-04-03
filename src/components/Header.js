import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import menuBar from '../images/bars with menu.png'
import cancelBtn from '../images/large cancel btn.png'

const Header = (props) => {
  let [showMenu, setShowMenu] = useState(false);
  let { navItems } = props
  let [showNavItems, setShowNavItems] = useState(navItems)

  let hamdleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className='flex w-full h-[12vh] items-center py-1  justify-between absolute top-0 left-0 right-0 md:px-20'>
      <Logo />
      {showNavItems ? <div id={showMenu ? 'showMenuId' : 'id'} className='transition-all duration-700 fixed bg-blue-text-color top-[-165px] p-5 w-full flex flex-col md:items-center md:justify-end md:top-[0px] md:p-1 md:w-1/2 md:h-full gap-3 md:flex-row md:flex md:bg-transparent md:relative'>
        <Link to='/sign/in'>
          <button className='transition duration-700 outline-none text-sx capitalize text-white px-5 py-2 text-center hover:border-white hover:border-[1px] rounded-sm'>sign in</button>
        </Link>
        <Link to='/sign/up'>
          <button className='transition duration-700 outline-none text-sx capitalize border-white border-[1px] bg-transparent text-white px-5 py-2 text-center rounded-sm'>sign up</button>
        </Link>
      </div> : null
      }
      {showNavItems && <div className='flex items-center mr-3  justify-center p-2 md:hidden' onClick={hamdleMenuClick}>
        {showMenu ? <img className='w-[25px] h-[25px]' src={cancelBtn} /> : <img className='w-[70px] mb-2' src={menuBar} />}
      </div>
      }
    </header>
  )
}

export default Header
