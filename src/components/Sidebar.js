import React from 'react'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from '@mui/icons-material/Logout';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Sidebar = () => {
  return (
    <div className='w-[15%] h-[100vh] border-r-2 border-solid border-border-color flex-auto'>
      <div className='w-full flex items-center justify-between p-3 mt-[35px] px-[10px] border-b-[1px] border-b-gray-400'>
        <h4 className='capitalize font-bold text-xl'>menu</h4>
        <ListIcon
          style={{
            color: "#252c47",
            fontSize: '45px',
            fontWeight: "bolder",
            cursor: "pointer",
            zIndex: '10',
          }}
        />
      </div>
      <main className='border-b-[1px] border-b-gray-400 py-10 w-full flex flex-col  items-center justify-center'>
        <div className='flex w-full justify-between items-center px-[10px] my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>dashboard</h4>
          <DashboardCustomizeOutlinedIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
        <div className='flex w-full justify-between items-center boder-[1px] px-[10px] border-gray-400 my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>history</h4>
          <HistoryOutlinedIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
        <div className='flex w-full justify-between items-center boder-[1px] px-[10px] border-gray-400 my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>deposit</h4>
          <SavingsOutlinedIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
        <div className='flex w-full justify-between items-center boder-[1px] px-[10px] border-gray-400 my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>witdraw</h4>
          <PaymentOutlinedIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
      </main>
      <aside className='flex flex-col items-end justify-center  mt-[100px]'>
      <div className='flex w-full justify-between items-center boder-[1px] px-[10px] border-gray-400 my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>support</h4>
          <ContactSupportIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
        <div className='flex w-full justify-between items-center boder-[1px] px-[10px] border-gray-400 my-3 cursor-pointer'>
          <h4 className='capitalize font-bold text-xl'>log out</h4>
          <LogoutIcon
            style={{
              fontSize: '30px',
              marginRight: '15px',
            }}
          />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
