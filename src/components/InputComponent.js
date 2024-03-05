import React from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const InputComponent = (props) => {
  let { IconName, type, inputplaceholder, name, visibilityStatus, clickFunction} = props
  const CustomIconTag = IconName;

  return (
    <>
      <div className='relative w-[80%] h-[50px] flex items-center justify-center m-[10px]'>
        {CustomIconTag &&
          <IconName
            style={{
              color: '#252c47',
              fontSize: '30px',
              marginRight: '10px',
            }}
          />
        }
        <input type={type} name={name} placeholder={inputplaceholder} className='outline-none border-none h-[45px] w-[80%] p-[10px] rounded-sm placeholder:capitalize placeholder:text-logo-color placeholder:text-sm text-xl text-logo-color' />
        {
          name === 'password' && <div className='absolute right-[50px]' onClick={clickFunction}>
            {
              visibilityStatus ? <VisibilityOffIcon
                style={{
                  cursor: 'pointer',
                  color: '#252c47',
                }}
              /> : <VisibilityIcon
                style={{
                  cursor: 'pointer',
                  color: '#252c47',
                }}
              />
            }
          </div>
        }
      </div>
    </>
  )
}

export default InputComponent
