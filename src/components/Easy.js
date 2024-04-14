import React from 'react'
import ListComponent from './ListComponent'
import Getstarted from './Getstarted'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Easy = () => {
  return (
    <section className='px-5 py-[10vw] md:px-[10vw] md:py-[5vw] flex flex-col items-center justify-center w-full'>
      <h2 className='w-full text-left font-bold font-sans text-3xl md:text-4xl capitalize md:p-5 text-logo-color'>easy start with trade ace</h2>
      <ul className='flex flex-col md:grid md:grid-cols-2 w-full self-center justify-self-center'>
        <li className=' m-[5px] md:m-[15px] w-full items-center justify-start'>
        <ListComponent
            tag="h3"
            tagContent= '01.'
            listTitlle="Quick Sign-Up"
            listDescrion="it'll take you 2mins tops"
          />
        </li>
        <li className=' m-[5px] md:m-[15px] w-full items-center justify-start'>
        <ListComponent
            tag="h3"
            tagContent= '02.'
            listTitlle="Secure Deposit"
            listDescrion='E-wallet transfer min $1,000'
          />
        </li>
        <li className=' m-[5px] md:m-[15px] w-full items-center justify-start'>
        <ListComponent
            tag="h3"
            tagContent= '03.'
            listTitlle="Launch"
            listDescrion='Enjoy your automated trading experience'
          />
        </li>
        <li className=' m-[5px] md:m-[15px] w-full items-center justify-start'>
        <ListComponent
            tag="h3"
            tagContent= '04.'
            listTitlle="Seamless user experience"
            listDescrion="You'll enjoy navigating our web app"
          />
        </li>
        <li className=' m-[5px] md:m-[15px] w-full items-center justify-start'>
        <ListComponent
            tag="h3"
            tagContent= '05.'
            listTitlle="secured user Details"
            listDescrion='Your details are secured with tradeace'
          />
        </li>
        <li className='w-full my-[15px] mx-[10px] flex items-center justify-center md:justify-start'>
        <Getstarted 
          buttonIcon={ArrowRightAltIcon}
          content="get started"
        />
        </li>
      </ul>
    </section>
  )
}

export default Easy
