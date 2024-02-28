import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import AboutUs from '../components/AboutUs'
import Difference from '../components/Difference'
import Easy from '../components/Easy'

const Home = () => {
  return (
    <section className='w-full'>
      <Header />
      <Herosection />
      <AboutUs />
      <Difference />
      <Easy />
    </section>
  )
}

export default Home