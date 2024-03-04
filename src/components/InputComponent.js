import React from 'react'
import HttpsIcon from '@mui/icons-material/Https';

const InputComponent = (props) => {
  let { IconName, type, inputplaceholder, name } = props
  const CustomIconTag = IconName;
  return (
    <>
      <div className={name = 'password' ? 'relative w-[80%] h-[50px] flex items-center justify-center m-[10px]' : 'w-[80%] h-[50px] flex items-center justify-center m-[10px]'}>
        {CustomIconTag &&
          <IconName 
            style={{
              color: '#252c47',
              fontSize: '30px',
              marginRight: '10px',
            }}
          />
        }
        <input type={type} name={name} placeholder={inputplaceholder} className='outline-none border-none h-[45px] w-[80%] p-[10px] rounded-sm' />
        {
          name = 'password' && <div className='absolute right-[50px]'>
          <HttpsIcon />
        </div>
        }
      </div>
    </>
  )
}

export default InputComponent
