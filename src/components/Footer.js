import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className='flex flex-col items-center justify-center w-full'>
            <aside className='flex w-full'>
                <Link to='/signup' className='flex items-center justify-center gap-y-3 w-1/2 bg-blue-text-color'>
                    <div className='flex flex-col gap-y-3 px-2 md:px-[5vw] py-4 w-full'>
                    <h1 className='font-sans font-bold text-xl md:text-3xl capitalize w-full text-center md:text-end md:pr-7 text-overallBg'>sign up now</h1>
                    <p className='font-sans font-light text-overallBg w-full text-end pr-7 hidden md:block'>to discover a more efficient way to trade</p>
                    </div>
                </Link>
                <Link to='/signin' className='flex items-center justify-center w-1/2 bg-white'>
                    <div className='flex flex-col gap-y-3 px-2 md:px-[5vw] py-4 w-full'>
                    <h1 className='font-sans font-bold text-xl md:text-3xl capitalize w-full text-center md:text-start md:pl-7 text-logo-color'>sign in</h1>
                    <p className='font-sans font-light text-logo-color w-full text-start pl-7 hidden md:block'>to start making profit from trade ace</p>
                    </div>
                </Link>
            </aside>
            <main className='py-[20px] px-[15px] md:py-7 md:px-[15vw] flex flex-col gap-y-5 bg-logo-color items-center w-full justify-start'>
                <p className='w-full text-start capitalize text-overallBg text-sm p-3 font-sans font-light'>© copyright {year} trade ace</p>
                <address className='w-full text-start p-3'>
                    <p className='capitalize text-overallBg font-light text-sm font-sans'>trade ace ireland LTD</p>
                    <p className='capitalize text-overallBg font-light text-sm font-sans'>office 29, clifton house, fitzwilliam street lower, dublin 2, republic of ireland</p>
                </address>
            </main>
        </footer>
    )
}

export default Footer
