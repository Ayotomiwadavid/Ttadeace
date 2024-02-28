import React from 'react'
import differenceImg from '../images/counts.PNG'
import SettingsIcon from '@mui/icons-material/Settings';
import CachedIcon from '@mui/icons-material/Cached';
import WifiIcon from '@mui/icons-material/Wifi';
import ListComponent from './ListComponent';

const Difference = () => {
  return (
    <div className='flex-col-reverse gap-5 items-center justify-center w-full py-[20px] px-[15px] md:px-[10vw] md:gap-0 md:py-[50px] md:flex md:flex-row'>
      <section className='flex flex-col items-start justify-center w-full mb-6 md:w-4/6'>
        <h1 className='md:w-4/5 w-full text-left text-2xl font-bold font-sans text-logo-color p-2 md:text-5xl md:p-8'>What makes Trade Ace different?</h1>
        <div className='flex flex-col w-full gap-1 items-center justify-center'>
          <ListComponent
            iconName={SettingsIcon}
            listTitlle="tick market data"
            listDescrion='instant order book update with each change'
          />
          <ListComponent
            iconName={CachedIcon}
            listTitlle="lossless order modification"
            listDescrion="changes to your order won't affect their priority"
          />
          <ListComponent
            iconName={WifiIcon}
            listTitlle="good-till-session orders"
            listDescrion='orders recall from the matcher if connection is lost'
          />
        </div>
      </section>
      <aside className='flex items-center justify-center h-[500px] w-full md:w-2/6'>
        <img src={differenceImg} alt='img' className='w-full h-full' />
      </aside>
    </div>
  )
}

export default Difference