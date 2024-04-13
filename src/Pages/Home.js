import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import AboutUs from '../components/AboutUs'
import Difference from '../components/Difference'
import Easy from '../components/Easy'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';

const Home = () => {
  return (
    <section className='w-full bg-overallBg'>
     <ToastContainer />
      <Header 
        navItems = {true}
      />
      <Herosection />
      <AboutUs />
      <Difference />
      <Easy />
      <Footer />
    </section>
  )
}

export default Home