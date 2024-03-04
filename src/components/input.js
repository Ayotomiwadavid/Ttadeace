import React from 'react'
import HttpsIcon from '@mui/icons-material/Https';

const input = (props) => {
  let { iconName, placeholder, inputName, inputType } = props;
  let customIcon = iconName;
  return (
    <div className='w-full h-[45px] p-[30px] bg-red-800'>
      {customIcon && <customIcon
        style={{
          color: "#fa0202",
          fontSize: '20px'
        }}
      />}
      <input type={inputType} name={inputName} placeholder={placeholder} className='h-[45px] w-[200px] rounded-sm outline-none border-none' />
    </div>
  )
}

export default input
