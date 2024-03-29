import React from 'react'
import Depositsidebar from './Depositsidebar'
import Accountdetails from './Accountdetails'

const Despositmain = () => {
    return (
        <main className='w-full flex px-[10vw] gap-5 h-[100%] items-center justify-between'>
            <Depositsidebar />
            <Accountdetails />
        </main>
    )
}

export default Despositmain
