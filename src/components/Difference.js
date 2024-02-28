import React from 'react'
import differenceImg from '../images/counts.PNG'
import SettingsIcon from '@mui/icons-material/Settings';

const Difference = () => {
  return (
    <div className='flex-col-reverse gap-5 items-center justify-center w-full py-[20px] px-[15px] md:px-[10vw] md:gap-0 md:py-[50px] md:flex md:flex-row'>
      <section className='flex flex-col items-start justify-center w-full md:w-1/2'>
        <h1 className='w-full text-left text-2xl font-bold font-sans text-logo-color p-2 md:text-4xl md:p-8'>What makes Trade Ace different?</h1>
        <div>
          <div>
            <div>
              <SettingsIcon />
            </div>
            <h4>tick market data</h4>
            <p>instant order book update with each edge</p>
          </div>
        </div>
      </section>
      <aside className='flex items-center justify-center h-[500px] w-full md:w-1/2'>
        <img src={differenceImg} alt='img' className='w-full h-full' />
      </aside>
    </div>
  )
}

export default Difference