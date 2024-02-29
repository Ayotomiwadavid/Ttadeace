import React from 'react'
import notFoundimg from '../images/404svg.png'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Pagenotfound = () => {
    return (
        <main className='flex items-center gap-5 justify-center flex-col h-lvh p-4 md:gap-2'>
            <img src={notFoundimg} alt='page not found' className='animate-pulse' />
            <h1 className='capitalize font-500 font-sans text-logo-color text-sm text-center p-5 md:p-3'>oops we're sorry, we can't find the page you're looking for</h1>
            <Link to='/'>
                <Button
                    buttonContent='back to home'
                />
            </Link>
        </main>
    )
}

export default Pagenotfound
