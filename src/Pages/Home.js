import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <section className='w-full'>
      <Header />
      <Herosection />
      <AboutUs />
    </section>
  )
}

export default Home
