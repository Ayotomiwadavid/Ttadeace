import React, { useState } from 'react'

const DashNavi = (props) => {
    let { navigatorName, navigatorIcon, type, onClick, status} = props

    let CustomIcon = navigatorIcon;

    return (
        <div className='flex w-full justify-between items-center px-[10px] my-3 cursor-pointer' onClick={type == 'menuBar' ? onClick : null}>
            {
                status && <h4 className='capitalize font-bold text-xl transition-all duration-300 text-logo-color'>{navigatorName}</h4>
            }
            <CustomIcon
                style={{
                    fontSize: '30px',
                    marginRight: '15px',
                    color: '#252c47'
                }}
            />
        </div>
    )
    
}

export default DashNavi