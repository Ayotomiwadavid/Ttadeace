import React from 'react'
import Depositsidebar from './Depositsidebar'
import Accountdetails from './Accountdetails'

const Despositmain = () => {
    return (
        <main className='w-full px-[15px] flex md:px-[10vw] gap-5 md:h-[100%] items-center justify-between flex-col-reverse md:flex-row overflow-y-auto'>
            <Depositsidebar />
            <Accountdetails />
        </main>
    )
}

export default Despositmain
