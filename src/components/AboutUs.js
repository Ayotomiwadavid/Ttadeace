import React from 'react'
import Ultimatesvg from '../images/ultimate-svg.png'
import outstandingsvg from '../images/outstanding-svg.png'
import competitivesvg from '../images/competitive-svg.png'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className=' flex flex-col md:px-8 md:py-[50px]'>
            <main className='flex flex-col items-center justify-center'>
                <h1 className='w-full text-2xl text-left font-bold font-sans md:text-4xl text-logo-color capitalize p-3'>why choose trade ace?</h1>
                <div className='container px-[5vw] w-full flex flex-col gap-3 items-center justify-center md:flex-row'>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={Ultimatesvg} alt='about image' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>The ultimate Api</h4>
                        <p className='text-small-text-color p-2 md:w-4/5 leading-6 text-sm capitalize text-center md:text-left'>we offer customizable APIs and binary trading protocols
                            designes for automated trading in all it's varieties.
                            You've got the tools - we've got the gateway
                        </p>
                    </div>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={outstandingsvg} alt='about image' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>outstanding services</h4>
                        <p className='text-small-text-color p-2 md:text-left w-4/5 leading-6 text-sm capitalize text-center'>
                            We've got you covered on all fronts. Enjoy extra-quick
                            verification and withdrawals, 24/7 support in your language,
                            2-factor authentication and cold storage.
                        </p>
                    </div>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={competitivesvg} alt='about image' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>competitive rates</h4>
                        <p className='text-small-text-color p-2 md:text-left w-4/5 leading-6 text-sm capitalize text-center'>
                            We dare you to find lower     commission rates.
                            Trade Ace charges just 0.05% per trading order.
                            That's x3 lower than the industry's average.
                        </p>
                    </div>
                </div>
            </main>
            <aside className='flex flex-col items-center justify-center w-full px-[8vw] py-[50px]'>
                <div className='flex px-11 items-center justify-between w-4/5 mb-3'>
                    <h3 className='text-logo-color font-bold font-serif text-4xl'>Exchange</h3>
                    <h6 className='font-bold text-logo-color text-base capitalize'>24h volume: <span className='text-blue-text-color'>$1,304,398,875</span></h6>
                    <h6 className='font-bold text-logo-color text-base capitalize'>cryptocurrencies: <span className='text-blue-text-color'>15</span></h6>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex w-full items-center justify-center bg-slate-50 px-11 h-[130px]'>
                        <div className='flex items-center justify-between w-4/5 mr-5'>
                            <div className='w-1/3 flex pl-10  p-5 items-center justify-between gap-6'>
                                <h5 className='text-3xl text-logo-color capitalize font-bold font-sans '>USD</h5>
                                <h4 className='text-4xl text-blue-text-color font-bold font-sans'>10,000</h4>
                            </div>
                            {/* Exchange Logo */}
                            <div className='flex items-center justify-center h-[50px] w-[50px] rounded-full bg-logo-color'>
                                <SyncAltIcon style={{
                                    width: '20px',
                                    height: '20px',
                                    color: 'white'
                                }} />
                            </div>
                            <div className='w-1/3 flex pl-10  p-5 items-center justify-between gap-6'>
                                <h5 className='text-3xl text-logo-color capitalize font-bold font-sans '>BTC</h5>
                                <h4 className='text-4xl text-blue-text-color font-bold font-sans'>1.51352</h4>
                            </div>
                        </div>
                        <Link to='/signup'>
                            <button className=' flex items-center justify-center w-1/3 rounded-md h-[45px] w-[150px] p-5 text-center text-white bg-blue-text-color'>Get started</button>
                        </Link>
                    </div>
                    <div id='underNeatImage'></div>
                </div>
            </aside>
        </section>
    )
}

export default AboutUs
