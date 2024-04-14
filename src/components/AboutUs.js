import React from 'react'
import Ultimatesvg from '../images/ultimate-svg.png'
import outstandingsvg from '../images/outstanding-svg.png'
import competitivesvg from '../images/competitive-svg.png'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import './about.css'
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Getstarted from './Getstarted';

const AboutUs = () => {
    return (
        <section className=' flex flex-col items-center justify-center md:px-8 md:py-[50px]'>
            <main className='flex flex-col items-center justify-center'>
                <h1 className='w-full text-2xl text-left font-bold font-sans md:text-4xl text-logo-color capitalize p-3'>why choose trade ace?</h1>
                <div className='px-[5vw] w-full flex flex-col gap-3 items-center justify-center md:flex-row'>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={Ultimatesvg} alt='about img' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>The ultimate Api</h4>
                        <p className='text-small-text-color p-2 md:w-4/5 leading-6 text-sm capitalize text-center md:text-left'>we offer customizable APIs and binary trading protocols
                            designes for automated trading in all it's varieties.
                            You've got the tools - we've got the gateway
                        </p>
                    </div>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={outstandingsvg} alt='about img' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>outstanding services</h4>
                        <p className='text-small-text-color p-2 md:text-left md:w-4/5 leading-6 text-sm capitalize text-center'>
                            We've got you covered on all fronts. Enjoy extra-quick
                            verification and withdrawals, 24/7 support in your language,
                            2-factor authentication and cold storage.
                        </p>
                    </div>
                    <div className='items-center justify-center w-full p-2 flex flex-col md:items-start md:justify-start md:w-1/3'>
                        <img className='w-[150px] h-[150px]' src={competitivesvg} alt='about img' />
                        <h4 className='font-bold capitalize p-2 text-center md:text-left w-full text-xl text-logo-color font-serif'>competitive rates</h4>
                        <p className='text-small-text-color p-2 md:text-left md:w-4/5 leading-6 text-sm capitalize text-center'>
                            We dare you to find lower     commission rates.
                            Trade Ace charges just 0.05% per trading order.
                            That's x3 lower than the industry's average.
                        </p>
                    </div>
                </div>
            </main>
            <aside className='no-scrollbar flex flex-col items-center justify-center w-full py-[30px] px-1 md:px-[10vw] md:py-[50px] overflow-x-scroll'>
                <div className='flex gap-5 md:px-11 items-center justify-end flex-wrap w-[750px] md:w-4/5 mb-3'>
                    <h3 className='text-logo-color font-bold font-serif text-3xl md:text-4xl shrink-0'>Exchange</h3>
                    <h6 className='font-bold text-logo-color text-base capitalize shrink-0'>24h volume: <span className='text-blue-text-color'>$1,304,398,875</span></h6>
                    <h6 className='font-bold text-logo-color text-base capitalize  shrink-0'>cryptocurrencies: <span className='text-blue-text-color'>15</span></h6>
                </div>
                <div className='flex flex-col pl-[300px] items-center justify-center w-[1000px] md:pl-0 md:w-full'>
                    <div className='flex w-full items-center justify-center bg-slate-50 h-[130px] shrink-0'>
                        <div className='flex items-center justify-between w-4/5 mr-5'>
                            <div className=' shrink-0 md:w-1/3 flex pl-10 p-5 items-center justify-between gap-6'>
                                <h5 className='text-3xl text-logo-color capitalize font-bold font-sans '>USD</h5>
                                <h4 className='text-4xl text-blue-text-color font-bold font-sans'>1,000</h4>
                            </div>
                            {/* Exchange Logo */}
                            <div className=' shrink-0 flex items-center justify-center h-[50px] w-[50px] rounded-full bg-logo-color'>
                                <SyncAltIcon style={{
                                    width: '20px',
                                    height: '20px',
                                    color: 'white'
                                }} />
                            </div>
                            <div className=' shrink-0 md:w-1/3 flex pl-10  p-5 items-center justify-between gap-6'>
                                <h5 className='text-3xl text-logo-color capitalize font-bold font-sans '>BTC</h5>
                                <h4 className='text-4xl text-blue-text-color font-bold font-sans'>0.015</h4>
                            </div>
                        </div>
                        <Getstarted
                            content="get started"
                        />
                    </div>
                    <div className='flex gap-1 p-5 items-center justify-center h-[130px] bg-logo-color w-full shrink-0'>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>btc/usd</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>6,530.0001</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <SouthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "rgb(250, 59, 59)"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>eth/usd</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>5,807.88</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <SouthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "rgb(250, 59, 59)"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>ltc/btc</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>6,530.001</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <NorthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "green"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>neo/usd</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>5,807.88</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <SouthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "rgb(250, 59, 59)"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>omg/usd</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>6,530.0001</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <NorthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "green"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-1/6 p-2'>
                            <div className='flex flex-col items-center justify-center w-3/5 mr-2'>
                                <p className='text-left text-white font-sans uppercase text-lg font-bold'>ltc/usd</p>
                                <p className='text-left text-white font-sans font-light uppercase text-lg'>8,530.0001</p>
                            </div>
                            <div className='flex items-center justify-center p-3 h-full'>
                                <NorthEastIcon
                                    style={{
                                        fontWeight: "lighter",
                                        fontSize: '25px',
                                        marginTop: '19px',
                                        color: "green"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default AboutUs
