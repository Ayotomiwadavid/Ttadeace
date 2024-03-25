import React from 'react'

const Mobilenav = (props) => {
    let {navName, imageSrc} = props;

  return (
    <div className='w-[92px] h-[57px] flex flex-col items-center justify-center'>
      <img src={imageSrc} alt='home' style={{width: '30px', height: "30px"}}/>
      <h4 className='capitalize text-sm text-logo-color font-bold font-sans'>{navName}</h4>
    </div>
  )
}

export default Mobilenav
