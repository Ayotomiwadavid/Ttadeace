import React from 'react'
import cardImage from '../images/bg-card-front.png'
import { Add } from '@mui/icons-material'

const Balancecard = (props) => {
  let {currencySymbol, cardDescription, balance} = props
  return (
    <div className=' py-5 h-full w-1/2 relative'>
      <img src={cardImage} alt='card img' className='h-[200px] w-full' />
      <div className='h-[200px] w-full rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center'>
        <div className='w-full items-center justify-between flex px-5'>
          <h1 className='text-white text-lg capitalize font-bold p-5 w-[50%] px-0'>{cardDescription}</h1>
          <div className='rounded-full border-2 border-white w-[40px] h-[40px] flex items-center justify-center mb-5'>
            <Add
              style={{
                fontSize: '35px',
                fontWeight: 'bolder',
                color: '#fff',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
        <p className='text-white font-bold p-10 px-5 w-full text-left text-2xl uppercase'>{balance} {currencySymbol}</p>
      </div>
    </div>
  )
}

export default Balancecard
