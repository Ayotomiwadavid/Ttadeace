import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import CachedIcon from '@mui/icons-material/Cached';
import WifiIcon from '@mui/icons-material/Wifi';

const ListComponent = (props) => {
    let { iconName, listTitlle, listDescrion } = props
    const CustomTag = iconName
    return (
        <div className='flex w-full items-center justify-start py-5 md:px-5 md:py-3'>
            {
                CustomTag && <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-logo-color mr-1 md:mr-3'>
                    <CustomTag
                        style={{
                            color: "#fff",
                            fontSize: '20px'
                        }} />
                </div>
            }
            <div className='flex flex-col pl-3 md:pl-6 items-start justify-center'>
                <h4 className='font-bold text-lg capitalize text-logo-color'>{listTitlle}</h4>
                <p className='mt-[10px] capitalize font-bold text-xs'>{listDescrion}</p>
            </div>
        </div>
    )
}

export default ListComponent
