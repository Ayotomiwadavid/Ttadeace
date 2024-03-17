import React, { useState } from 'react'

const DashNavi = (props) => {
    let { navigatorName, navigatorIcon, type } = props

    let [showdashMenu, setShowDashMenu] = useState(true);

    let handleMenuVisibility = () => {
        setShowDashMenu((prevValue) => {
            if (prevValue === true) {
                return false
            } else {
                return true
            }
        })
    }

    let CustomIcon = navigatorIcon;

    return (
        <div className='flex w-full justify-between items-center px-[10px] my-3 cursor-pointer' onClick={type === 'menuBar' && handleMenuVisibility}>
            {
                showdashMenu && <h4 className='capitalize font-bold text-xl'>{navigatorName}</h4>
            }
            <CustomIcon
                style={{
                    fontSize: '30px',
                    marginRight: '15px',
                }}
            />
        </div>
    )
}

export default DashNavi