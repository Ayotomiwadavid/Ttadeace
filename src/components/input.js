import React from 'react'
import HttpsIcon from '@mui/icons-material/Https';

const input = (props) => {
  let {iconName, placeholder, inputName, inputType} = props;
  let customIcon = iconName;
  return (
    <div className='w-full h-[45px]'>
      {iconName && <customIcon />}
      <input type={inputType} name={inputName} placeholder={placeholder} className='h-[45px] rounded-sm outline-none border-none'/>
    </div>
  )
}

export default input
