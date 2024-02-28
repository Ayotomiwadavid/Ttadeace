import React from 'react'
import ListComponent from './ListComponent'

const Easy = () => {
  return (
    <section className='px-[10vw] py-[5vw] flex flex-col items-center justify-center w-full'>
      <h2 className='w-full text-left font-bold font-sans text-4xl capitalize p-5 text-logo-color'>easy start with trade ace</h2>
      <ol>
        <li>
        <ListComponent
            listTitlle="tick market data"
            listDescrion='instant order book update with each change'
          />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </section>
  )
}

export default Easy
