import React from 'react'
import Depositsidebar from './Depositsidebar'
import Accountdetails from './Accountdetails'

const Despositmain = () => {
    return (
        <main className='w-full h-[80vh] px-[10px] md:mt-[100px] flex md:px-[10vw] gap-3 md:gap-5 md:h-[100%] items-center justify-center md:justify-between flex-col-reverse md:flex-row overflow-scroll md:overflow-hidden'>
            <Depositsidebar />
            <Accountdetails />
        </main>
    )
}
export default Despositmain