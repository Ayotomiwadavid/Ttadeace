import React from 'react'

const Button = (props) => {
    let { buttonContent, ...remainant } = props
    return (
        <button className='capitalize gap-2 font-bold flex items-center justify-center rounded-md h-[45px] p-3 w-fit md:w-[150px] md:p-5 text-center text-white bg-blue-text-color'>
            {buttonContent}
        </button>
    )
}

export default Button
