import React from 'react'
import { signOutFunc } from '../config/controller';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mobilenav = (props) => {
  //DECLARING USENAVIGATE
  const navigate = useNavigate()
  let { navName, imageSrc, buttonType } = props;

  let handleLogout = () => {
    toast.loading("We're logging you out");
    setTimeout(()=>{
      toast.success('logout success');
    }, 3000)
    setInterval(()=>{
      navigate(`/sign/in`, { replace: true })
      signOutFunc();
    }, 5000);
  }

  let handleClick = () =>{
    if (buttonType === 'logout') {
      handleLogout();
    }
  }

  return (
     <div className='w-[92px] h-[57px] flex flex-col items-center justify-center' onClick={handleClick}>
      <img src={imageSrc} alt='home' style={{ width: '30px', height: "30px" }} />
      <h4 className='capitalize text-sm text-logo-color font-bold font-sans'>{navName}</h4>
    </div>
  )
}

export default Mobilenav
