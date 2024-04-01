import React from 'react'
import Depositsidebar from './Depositsidebar'
import Accountdetails from './Accountdetails'

const Despositmain = () => {
    return (
        <main className='w-full px-[15px] mt-[400px] md:mt-0 flex md:px-[10vw] gap-5 md:h-[100%] items-center justify-center md:justify-between flex-col-reverse md:flex-row overflow-y-auto md:overflow-hidden'>
            <Depositsidebar />
            <Accountdetails />
        </main>
    )
}

export default Despositmain
