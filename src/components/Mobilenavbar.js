import React from 'react'
import Mobilenav from './Mobilenav'
import home from '../images/homepng.png'
import giftcard from '../images/credit-cardpng.png'
import transaction from '../images/receiptpng.png'
import logOut from '../images/exitpng.png'
import { Link } from 'react-router-dom'

const Mobilenavbar = () => {
  return (
    <div className='flex items-center justify-center absolute bottom-0 right-0 left-0 bg-white md:hidden z-10 w-full py-3'>
      <Link to='/dashboard' >
        <Mobilenav
          imageSrc={home}
          navName='home'
          buttonType='link'
        />
      </Link>
      <Link to='/withdraw'>
        <Mobilenav
          imageSrc={giftcard}
          navName='withdraw'
          buttonType='link'
        />
      </Link>
      <Link to='/user-history'>
        <Mobilenav
          imageSrc={transaction}
          navName='transactions'
          buttonType='link'
        />
      </Link>
      <Mobilenav
        imageSrc={logOut}
        navName='log out'
        buttonType='logout'
      />
    </div>
  )
}

export default Mobilenavbar
